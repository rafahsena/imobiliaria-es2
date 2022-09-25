//@ts-ignore
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import mock from "src/mock";
import { Imovel } from "src/models";
import PropertyCard from "src/views/cards/PropertyCard";

type PropertyDetailsProps = {
  imovel: Imovel;
  id: Number;
};

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ imovel, id }) => {
  const router = useRouter();

  const redirectToCreateAdPage = () => {
    router.push(`/criar-anuncio/${id}`);
  };

  const redirectToEditPropertyPage = () => {
    router.push(`/criar-imovel/${id}`);
  };

  return (
    <PropertyCard
      onCreateAdClick={redirectToCreateAdPage}
      onEditPropertyClick={redirectToEditPropertyPage}
      imovel={imovel}
    />
  );
};

export const getServerSideProps: GetServerSideProps = (context) => {
  const { params } = context;

  const id = Number(params.id);

  const { listaDeImoveis } = mock();
  return {
    props: {
      imovel: listaDeImoveis[id],
      id,
    },
  };
};

export default PropertyDetails;
