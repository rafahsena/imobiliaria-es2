import React, { useState } from "react";
import { PDFReader } from "src/views/utils/ContratoPDF";
import { useRouter } from "next/router";
import ModalRevogarContrato from "src/views/utils/ModalRevogarContrato";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

// import { Container } from './styles';

const Contrato: React.FC = () => {
  const router = useRouter();
  const [openModalRevogarContrato, setOpenModalRevogarContrato] =
    useState(false);

  const redirectToChangeContract = () => {
    router.push(`/detalhes-imovel/${router.query.id}/alterar-contrato`);
  };

  const cancelContract = () => {
    setOpenModalRevogarContrato(true);
  };
  return (
    <>
      {/* <PDFReader /> */}

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
      />
    </>
  );
};

export default Contrato;
