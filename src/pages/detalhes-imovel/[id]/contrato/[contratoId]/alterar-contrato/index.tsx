import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import FormularioAlterarContrato from "src/views/form-layouts/FormularioAlterarContrato";
import { alterarContrato, verContrato } from "src/services/contrato";
import { ServerNetwork } from "mdi-material-ui";
import Loading from "src/layouts/components/Loading";
// import { Container } from './styles';

const AlterarContrato = ({ contratoId }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [contrato, setContrato] = useState<any>(null);

  const onSubmit = async (contrato) => {
    try {
      await alterarContrato(contratoId, contrato);

      router.push(`/detalhes-imovel/${router.query.id}/contrato/${contratoId}`);
    } catch (e) {
      console.log(e);
    }
  };

  const handleGetContrato = async () => {
    try {
      setLoading(true);
      const response = await verContrato(Number(contratoId));

      console.log(response);

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
    <FormularioAlterarContrato contratoData={contrato} onSubmit={onSubmit} />
  );
};

export const getServerSideProps = (context) => {
  return {
    props: {
      contratoId: context.query.contratoId,
    },
  };
};

export default AlterarContrato;
