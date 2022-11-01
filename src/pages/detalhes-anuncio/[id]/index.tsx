import { Grid } from "@mui/material";
import { GetServerSideProps } from "next";
import { verAnuncio } from "src/services/anuncios";
import CardAnuncio from "src/views/cards/CardAnuncio";

const DetalhesImovel = ({ anuncio }) => {
  return <CardAnuncio {...anuncio} />;
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { id } = context.query;

  const anuncio = await verAnuncio(id);

  return {
    props: {
      anuncio,
    },
  };
};

export default DetalhesImovel;
