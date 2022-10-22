import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

// import { Container } from './styles';

const FormularioInteresse: React.FC = () => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const interesse = {
        nome,
        telefone,
        email,
      };

      console.log(interesse);
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
                label="Telefone"
                value={telefone}
                onChange={(value) => setTelefone(value.target.value)}
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
                  Demonstrar interesse
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </form>
    </Card>
  );
};

export default FormularioInteresse;
