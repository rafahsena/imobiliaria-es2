//@ts-ignore
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import mock from "src/mock";
import { Imovel } from "src/models";
import PropertyCard from "src/views/cards/PropertyCard";
import ModalRemoverImovel from "src/views/utils/ModalRemoverImovel";

type PropertyDetailsProps = {
  imovel: Imovel;
  id: Number;
};

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ imovel, id }) => {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);

  const redirectToCreateAdPage = () => {
    router.push(`/detalhes-imovel/${id}/criar-anuncio`);
  };

  const redirectToEditPropertyPage = () => {
    router.push(`/detalhes-imovel/${id}/alterar-imovel`);
  };

  const onRemovePropertyClick = () => {
    setOpenModal(true);
  };

  return (
    <>
      <PropertyCard
        onCreateAdClick={redirectToCreateAdPage}
        onEditPropertyClick={redirectToEditPropertyPage}
        onRemovePropertyClick={onRemovePropertyClick}
        imovel={imovel}
      />

      <ModalRemoverImovel
        visible={openModal}
        closeModal={() => setOpenModal(false)}
      />
    </>
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
