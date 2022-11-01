import React, { useState, useEffect } from "react";
import { PDFReader } from "src/views/utils/ContratoPDF";
import { Card, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import { useRouter } from "next/router";
import ModalRevogarContrato from "src/views/utils/ModalRevogarContrato";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { revogarContrato, verContrato } from "src/services/contrato";
import { GetServerSideProps } from "next";
import Loading from "src/layouts/components/Loading";
import conversions from "src/utils/conversions";

// import { Container } from './styles';

const Contrato: React.FC = ({ contratoId }: any) => {
  const router = useRouter();
  const { moneyFormat } = conversions();

  const [openModalRevogarContrato, setOpenModalRevogarContrato] =
    useState(false);

  const [loading, setLoading] = useState(true);
  const [contrato, setContrato] = useState<any>(null);

  const tipoEnum = {
    v: "Venda",
    a: "Aluguel",
  };

  const redirectToChangeContract = () => {
    router.push(
      `/detalhes-imovel/${router.query.id}/contrato/${contratoId}/alterar-contrato`
    );
  };

  const cancelContract = () => {
    setOpenModalRevogarContrato(true);
  };

  const handleRevogarContrato = async () => {
    try {
      setLoading(true);
      await revogarContrato(contratoId);

      setOpenModalRevogarContrato(false);
      setLoading(false);

      router.reload();
    } catch (e) {
      setLoading(false);
    }
  };

  const handleGetContrato = async () => {
    try {
      setLoading(true);
      const response = await verContrato(contratoId);

      setContrato(response);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    handleGetContrato();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      {contrato && (
        <Card>
          <CardContent>
            <Typography marginBottom={8} variant="h5">
              Informações do Contrato
            </Typography>
            <Typography variant="body2">ID: {contrato.id}</Typography>
            <Typography variant="body2">
              Tipo: {tipoEnum[contrato.tipo.trim()]}
            </Typography>
            <Typography variant="body2">
              Valor: {moneyFormat(contrato.valor)}
            </Typography>
            <Typography variant="body2">
              Assinatura: {new Date(contrato.dataAssinatura).getDate()}/
              {new Date(contrato.dataAssinatura).getMonth() + 1}/
              {new Date(contrato.dataAssinatura).getFullYear()}
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 5 }}>
              Vencimento: {new Date(contrato.vencimento).getDate()}/
              {new Date(contrato.vencimento).getMonth() + 1}/
              {new Date(contrato.vencimento).getFullYear()}
            </Typography>

            <Grid>
              {contrato && (
                <PDFReader
                  contrato={contrato}
                  endereco={contrato.imovel.endereco}
                  funcionario={contrato.imovel.funcionario}
                  cliente={contrato.cliente}
                  imovel={contrato.imovel}
                />
              )}
              <Grid sx={{ marginTop: 5 }}>
                <Button onClick={redirectToChangeContract}>
                  Alterar Contrato
                </Button>

                <Button
                  color="error"
                  sx={{ marginLeft: 5 }}
                  onClick={cancelContract}
                >
                  Revogar Contrato
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}

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
