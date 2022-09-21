// ** MUI Imports
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { Anuncio } from "src/models";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import conversions from "src/utils/conversions";

const AdCard = ({
  titulo,
  descricao,
  tipo,
  valor,
  dataDeCriacao,
  imovel,
}: Anuncio) => {
  const { moneyFormat, areaFormat, locationFormat } = conversions();
  return (
    <Container>
      <Typography variant="h3" sx={{ marginBottom: 2 }}>
        {titulo}
      </Typography>
      <Typography variant="subtitle1">
        Data de publicação: {dataDeCriacao}
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        {moneyFormat(valor)}
      </Typography>
      <Typography>{descricao}</Typography>
      <Grid container spacing="2">
        <Grid item xl={3}>
          IPTU: {moneyFormat(imovel?.iptu)}
        </Grid>
        <Grid item xl={3}>
          Área: {areaFormat(imovel?.area)}
        </Grid>
        <Grid item xl={3}>
          Localidade:{" "}
          {locationFormat(
            imovel?.endereco.cidade,
            imovel?.endereco.estado,
            imovel?.endereco.pais
          )}
        </Grid>
        <Grid item xl={3}></Grid>
        <Grid item xl={3}></Grid>
        <Grid item xl={3}></Grid>
        <Grid item xl={3}></Grid>
      </Grid>
      <Button
        variant="contained"
        sx={{
          py: 2.5,
          mt: 2,
          width: "100%",
        }}
      >
        Preencher Formulário de Endereço
      </Button>
    </Container>
  );
};

export default AdCard;
