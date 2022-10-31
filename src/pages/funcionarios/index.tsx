import React, { useEffect, useState } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import Loading from "src/layouts/components/Loading";
import CardFuncionario from "src/views/cards/CardFuncionario";
import { Funcionario } from "src/models";
import { listarFuncionarios } from "src/services/funcionarios";
import router from "next/router";

const Funcionarios: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    listarFuncionarios()
      .then(setFuncionarios)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Box>
      <Button
        variant="outlined"
        onClick={() => router.push("/cadastrar-funcionario")}
        sx={{ marginBottom: 4 }}
      >
        Cadastrar Funcionário
      </Button>

      <Grid container spacing="2">
        {funcionarios.length === 0 && !isLoading && (
          <Box height={400} display="flex" margin="auto">
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              flex={1}
            >
              <Typography variant="h2">
                Nenhum funcionário cadastrado
              </Typography>
            </Box>
          </Box>
        )}
        {funcionarios.length === 0 && isLoading ? (
          <Loading />
        ) : (
          funcionarios.map((funcionario: Funcionario) => (
            <Grid item xs={12} sm={6} md={4} key={`${funcionario.id}`}>
              <CardFuncionario {...funcionario} />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default Funcionarios;
