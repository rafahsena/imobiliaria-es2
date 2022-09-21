import { Grid } from "@mui/material";
import mock from "src/mock";
import { Anuncio } from "src/models";
import CardAnuncio from "src/views/cards/CardAnuncioLista";

const ListaDeAnuncios = () => {
  const { listaDeAnuncios } = mock();

  return (
    <Grid container spacing="2">
      {listaDeAnuncios.map((anuncio: Anuncio) => (
        <Grid item xs={12} sm={6} md={4} key={anuncio.id}>
          <CardAnuncio {...anuncio} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListaDeAnuncios;
