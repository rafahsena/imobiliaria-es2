import { Grid } from "@mui/material";
import mock from "src/mock";
import { Interessado } from "src/models";
import CardInteressado from "src/views/cards/CardInteressado";

const ListaDeInteressados = () => {
  const { listaDeInteressados } = mock();

  return (
    <Grid container spacing="2">
      {listaDeInteressados.map((interessado: Interessado) => (
        <Grid item xs={12} sm={6} md={4} key={interessado.id}>
          <CardInteressado {...interessado} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListaDeInteressados;