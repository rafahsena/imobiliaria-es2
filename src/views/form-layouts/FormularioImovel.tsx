// ** React Imports
import { ChangeEvent, MouseEvent, useState, SyntheticEvent } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Select, { SelectChangeEvent } from "@mui/material/Select";d
import MenuItem from "@mui/material/MenuItem";

interface State {
  password: string;
  showPassword: boolean;
}

const FormularioImovel = () => {
  const [disponivel, setDisponivel] = useState(1);
  const [area, setArea] = useState(0);
  const [iptu, setIptu] = useState(0);

  const [logradouro, setLogradouro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCep] = useState("");
  const [pais, setPais] = useState("");
  const [complemento, setComplemento] = useState("");
  const [numero, setNumero] = useState("");

  const handleSubmit = (e: any) => {
    const imovel = {
      disponivel: !!disponivel,
      area,
      iptu,
    };

    const endereco = {
      logradouro,
      cidade,
      estado,
      cep,
      pais,
      complemento,
      numero,
    };

    console.log({
      ...imovel,
      ...endereco,
    });

    e.preventDefault();
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <CardHeader
            title="Sobre o imóvel"
            titleTypographyProps={{ variant: "h6" }}
          />
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Select
                autoWidth
                value={disponivel}
                onChange={(value) =>
                  setDisponivel(value.target.value as number)
                }
              >
                <MenuItem value={1}>Disponível</MenuItem>
                <MenuItem value={0}>Indisponível</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="number"
                label="Área"
                value={area}
                onChange={(value) => setArea(value.target.value as any)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="number"
                label="IPTU"
                value={iptu}
                onChange={(value) => setIptu(value.target.value as any)}
              />
            </Grid>
          </Grid>
        </CardContent>

        <CardContent>
          <CardHeader
            title="Endereço"
            titleTypographyProps={{ variant: "h6" }}
          />

          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Logradouro"
                value={logradouro}
                onChange={(value) => setLogradouro(value.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Número"
                value={numero}
                onChange={(value) => setNumero(value.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Complemento"
                value={complemento}
                onChange={(value) => setComplemento(value.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="CEP"
                value={cep}
                onChange={(value) => setCep(value.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Cidade"
                value={cidade}
                onChange={(value) => setCidade(value.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Estado"
                value={estado}
                onChange={(value) => setEstado(value.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="País"
                value={pais}
                onChange={(value) => setPais(value.target.value)}
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
                  Adicionar imóvel
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </form>
    </Card>
  );
};

export default FormularioImovel;
