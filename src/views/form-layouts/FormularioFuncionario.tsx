import { Alert, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { cadastrarFuncionario } from "src/services/funcionarios";
import router from "next/router";
import { LoadingButton } from "@mui/lab";

// import { Container } from './styles';

const FormularioFuncionario: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setError("");
      setIsLoading(true);
      const funcionario = {
        nome,
        email,
        password: senha,
      };

      await cadastrarFuncionario(funcionario);
      setIsLoading(false);
      router.push("/funcionarios");
    } catch (e) {
      setError("Não foi possível cadastrar o funcionário");
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nome"
                value={nome}
                onChange={(value) => setNome(value.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                value={email}
                onChange={(value) => setEmail(value.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Senha"
                value={senha}
                type="password"
                onChange={(value) => setSenha(value.target.value)}
              />
            </Grid>
            {error && (
              <Alert severity="error" sx={{ marginTop: 4, marginLeft: 4 }}>
                {error}
              </Alert>
            )}

            <Grid item xs={12}>
              <Box
                sx={{
                  gap: 5,
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <LoadingButton
                  loading={isLoading}
                  type="submit"
                  variant="contained"
                  size="large"
                >
                  Cadastrar funcionário
                </LoadingButton>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </form>
    </Card>
  );
};

export default FormularioFuncionario;
