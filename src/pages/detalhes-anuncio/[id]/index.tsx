import { Grid } from "@mui/material";
import { GetServerSideProps } from "next";
import CardAnuncio from "src/views/cards/CardAnuncio";

const DetalhesImovel = ({ anuncio }) => {

  return <CardAnuncio {...anuncio} />;
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  // const { listaDeAnuncios } = mock();
  // const ad = listaDeAnuncios.find((e) => e.id === Number(context.query.id));

  return {
    props: {
      // anuncio: ad,
    },
  };
};

export default DetalhesImovel;
