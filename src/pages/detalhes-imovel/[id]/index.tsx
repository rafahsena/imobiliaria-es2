//@ts-ignore
import { Alert } from "@mui/material";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Loading from "src/layouts/components/Loading";
import { Imovel } from "src/models";
import { getImovel, removerImovel } from "src/services/imovel";
import PropertyCard from "src/views/cards/PropertyCard";
import ModalRevogarContrato from "src/views/utils/ModalRevogarContrato";

type PropertyDetailsProps = {
  imovel: Imovel;
  id: Number;
};

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ imovel, id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const redirectToCreateAdPage = () => {
    router.push(`/detalhes-imovel/${id}/criar-anuncio`);
  };

  const redirectToEditPropertyPage = () => {
    router.push(`/detalhes-imovel/${id}/alterar-imovel`);
  };

  const emitContrat = () => {
    router.push(`/detalhes-imovel/${id}/emitir-contrato`);
  };

  const viewContract = () => {
    router.push(`/detalhes-imovel/${id}/contrato`);
  };

  const deleteProperty = async () => {
    try {
      setIsLoading(true);
      await removerImovel(id);
      router.push(`/lista-imoveis`);
    } catch (e) {
      setError("Não foi possível remover esse imóvel");
    } finally {
      setIsLoading(false);
    }
  };

  return isLoading ? (
    <Loading />
  ) : (
    <>
      {error && (
        <Alert severity="error" sx={{ marginBottom: 4 }}>
          {error}
        </Alert>
      )}
      <PropertyCard
        onDeleteClick={deleteProperty}
        onCreateAdClick={redirectToCreateAdPage}
        onEditPropertyClick={redirectToEditPropertyPage}
        onEmitContrat={emitContrat}
        onViewContract={viewContract}
        imovel={imovel}
      />
    </>
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
