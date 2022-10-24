import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Funcionario } from "src/models";

// import { Container } from './styles';

type FormularioFuncionarioProps = {
  usuario?: Funcionario;
};

const FormularioFuncionario: React.FC<FormularioFuncionarioProps> = ({
  usuario,
}) => {
  const [nome, setNome] = useState(usuario?.nome ?? "");
  const [email, setEmail] = useState(usuario?.email ?? "");
  const [senha, setSenha] = useState(usuario?.password ?? "");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const funcionario = {
        nome,
        email,
        senha,
      };

      console.log(funcionario);
    } catch (e) {}
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
                <Button type="submit" variant="contained" size="large">
                  {usuario ? "Salvar alterações" : "Cadastrar funcionário"}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </form>
    </Card>
  );
};

export default FormularioFuncionario;
