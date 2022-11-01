import { Alert, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import router from "next/router";
import { demonstrarInteresse } from "src/services/interessados";
import Loading from "src/layouts/components/Loading";

// import { Container } from './styles';

type FormularioInteresseProps = {
  anuncioId: number;
};

const FormularioInteresse = ({ anuncioId }: FormularioInteresseProps) => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();

    try {
      const interesse = {
        nome,
        telefone,
        email,
      };
      setError("");
      await demonstrarInteresse(anuncioId, interesse);
      setIsLoading(false);
      router.push(`/detalhes-anuncio/${anuncioId}`);
    } catch (e) {
      setError("Não foi possível cadastrar o interesse");
      setIsLoading(false);
    }
  };

  return (
    <>
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
                    justifyContent: "center",
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div style={{ width: 20, height: 20 }}>
                        <Loading />
                      </div>
                    ) : (
                      "Demonstrar interesse"
                    )}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </form>
      </Card>
      {error && (
        <Alert severity="error" sx={{ marginTop: 4 }}>
          {error}
        </Alert>
      )}
    </>
  );
};

export default FormularioInteresse;
