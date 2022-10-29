//@ts-ignore
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { Imovel } from "src/models";
import { getImovel } from "src/services/imovel";
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

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { params } = context;

  const id = Number(params?.id);

  const imovel = await getImovel(id);

  return {
    props: {
      imovel,
      id,
    },
  };
};

export default PropertyDetails;
