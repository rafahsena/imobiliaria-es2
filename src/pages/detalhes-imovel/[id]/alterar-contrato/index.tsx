import React from "react";
import FormularioContrato from "src/views/form-layouts/FormularioContrato";
import { useRouter } from "next/router";
// import { Container } from './styles';

type ContractProps = {
  id: Number;
};

const AlterarContrato = ({ id }: ContractProps) => {
  const router = useRouter();

  const onSubmit = () => {
    router.push(`/detalhes-imovel/${router.query.id}/contrato`);
  };
  return <FormularioContrato onSubmit={onSubmit} />;
};

export default AlterarContrato;
