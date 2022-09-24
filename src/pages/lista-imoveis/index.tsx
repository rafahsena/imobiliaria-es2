import { Grid } from "@mui/material";
import mock from "src/mock";
import { Imovel } from "src/models";
import CardImovel from "src/views/cards/CardImovelLista";

type PropsImoveis = {
  imoveis: Imovel[]
}

const ListaDeImoveis = (props: PropsImoveis) => {
  
  return (
    <Grid container spacing="2">
      {props.imoveis.map((imovel: Imovel) => (
        <Grid item xs={12} sm={6} md={4} key={imovel.id}>
          <CardImovel {...imovel} />
        </Grid>
      ))}
    </Grid>
  );
};

export async function getServerSideProps() {
  const { listaDeImoveis } = mock();

  return {
    props: {imoveis: listaDeImoveis}
  }
}

export default ListaDeImoveis;
