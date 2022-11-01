import React, { useState, useEffect } from "react";
import { PDFReader } from "src/views/utils/ContratoPDF";
import { useRouter } from "next/router";
import ModalRevogarContrato from "src/views/utils/ModalRevogarContrato";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { revogarContrato, verContrato } from "src/services/contrato";
import { GetServerSideProps } from "next";

// import { Container } from './styles';

const Contrato: React.FC = ({ contratoId }: any) => {
  const router = useRouter();
  const [openModalRevogarContrato, setOpenModalRevogarContrato] =
    useState(false);

  const [contrato, setContrato] = useState<any>(null);

  const redirectToChangeContract = () => {
    router.push(`/detalhes-imovel/${router.query.id}/alterar-contrato`);
  };

  const cancelContract = () => {
    setOpenModalRevogarContrato(true);
  };

  const handleRevogarContrato = async () => {
    try {
      await revogarContrato(contratoId);

      setOpenModalRevogarContrato(false);
    } catch (e) {}
  };

  const handleGetContrato = async () => {
    try {
      const response = await verContrato(contratoId);

      setContrato(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleGetContrato();
  }, []);

  return (
    <>
      {contrato && (
        <PDFReader
          contrato={contrato}
          endereco={contrato.imovel.endereco}
          funcionario={contrato.imovel.funcionario}
          cliente={contrato.cliente}
          imovel={contrato.imovel}
        />
      )}

      <Button variant="contained" onClick={redirectToChangeContract}>
        Alterar Contrato
      </Button>

      <Button
        variant="contained"
        color="error"
        sx={{ marginLeft: 5 }}
        onClick={cancelContract}
      >
        Revogar Contrato
      </Button>

      <ModalRevogarContrato
        visible={openModalRevogarContrato}
        closeModal={() => setOpenModalRevogarContrato(false)}
        onAction={handleRevogarContrato}
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const contratoId = context.query.contratoId;

  return {
    props: {
      contratoId,
    },
  };
};

export default Contrato;
