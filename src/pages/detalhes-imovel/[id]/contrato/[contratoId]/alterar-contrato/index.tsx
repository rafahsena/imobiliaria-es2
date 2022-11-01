import React from "react";
import { useRouter } from "next/router";
import FormularioAlterarContrato from "src/views/form-layouts/FormularioAlterarContrato";
import { alterarContrato } from "src/services/contrato";
// import { Container } from './styles';

const AlterarContrato = ({ contratoId }) => {
  const router = useRouter();

  const onSubmit = async (contrato) => {
    try {
      await alterarContrato(contratoId, contrato);

      router.push(`/detalhes-imovel/${router.query.id}/contrato/${contratoId}`);
    } catch (e) {
      console.log(e);
    }
  };

  return <FormularioAlterarContrato onSubmit={onSubmit} />;
};

export const getServerSideProps = (context) => {
  return {
    props: {
      contratoId: context.query.contratoId,
    },
  };
};

export default AlterarContrato;
