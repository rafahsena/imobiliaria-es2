import React, { useState } from "react";
import { Grid, Box, Button, Typography } from "@mui/material";
import Loading from "src/layouts/components/Loading";
import CardFuncionario from "src/views/cards/CardFuncionario";
import { Funcionario } from "src/models";

// import { Container } from './styles';

const Funcionarios: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [funcionarios, setFuncionarios] = useState([
    {
      id: 1,
      nome: "John Doe",
      email: "johnDoe@example.com",
      password: "",
    },
  ]);

  return (
    <Box>
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
