//@ts-ignore
import { GetServerSideProps, GetServerSidePropsContext } from "next";
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
    router.push(`/detalhes-imovel/${id}/criar-anuncio`);
  };

  const redirectToEditPropertyPage = () => {
    router.push(`/detalhes-imovel/${id}/alterar-imovel`);
  };

  return (
    <PropertyCard
      onCreateAdClick={redirectToCreateAdPage}
      onEditPropertyClick={redirectToEditPropertyPage}
      imovel={imovel}
    />
  );
};

export const getServerSideProps = (
  context: GetServerSidePropsContext
): { props: PropertyDetailsProps } => {
  const { params } = context;

  const id = Number(params?.id);

  const { listaDeImoveis } = mock();
  return {
    props: {
      imovel: listaDeImoveis[id],
      id,
    },
  };
};

export default PropertyDetails;
