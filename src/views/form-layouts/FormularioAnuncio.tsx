import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Alert, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { cadastrarAnuncio } from "src/services/anuncios";
import router from "next/router";
import { LoadingButton } from "@mui/lab";

const FormularioAnuncio = ({ imovelId }) => {
  const [tipo, setTipo] = useState("v");
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async () => {
    try {
      const anuncio = {
        tipo,
        titulo,
        descricao,
        valor,
        imovelId,
      };
      setError("");
      setLoading(true);

      await cadastrarAnuncio(anuncio);
      setLoading(false);
      router.push("/lista-anuncios");
    } catch (e) {
      setLoading(false);
      setError("Não foi possível cadastrar o anúncio");
    }
  };

  return (
    <Card>
      <CardContent>
        <CardHeader
          title="Sobre o anúncio"
          titleTypographyProps={{ variant: "h6" }}
        />
        <form onSubmit={(e) => e.preventDefault()}>
          <Grid item xs={12} sx={{ marginBottom: 4 }}>
            <Select
              autoWidth
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
            >
              <MenuItem value={"v"}>Venda</MenuItem>
              <MenuItem value={"a"}>Aluguel</MenuItem>
            </Select>
          </Grid>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Título"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Descrição"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Valor"
                value={valor}
                type="number"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                onChange={(e) => setValor(Number(e.target.value))}
              />
            </Grid>
            {error && (
              <Alert
                severity="error"
                sx={{ marginTop: 4, marginLeft: 4, marginRight: 4 }}
              >
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
                  loading={loading}
                  onClick={onSubmit}
                  variant="contained"
                  size="large"
                >
                  Adicionar imóvel
                </LoadingButton>
              </Box>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default FormularioAnuncio;
