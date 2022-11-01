import React from "react";
import FormularioContrato from "src/views/form-layouts/FormularioContrato";
import { useRouter } from "next/router";
import { emitirContrato } from "src/services/contrato";
// import { Container } from './styles';

type ContractProps = {
  id: Number;
};

const EmitirContrato = ({ id }: ContractProps) => {
  const router = useRouter();

  const onSubmit = async ({ contrato, cliente, endereco }) => {
    try {
      const response = await emitirContrato({ contrato, cliente, endereco });

      console.log(response);

      if (response) {
        // router.push(`/detalhes-imovel/${router.query.id}/contrato`);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return <FormularioContrato onSubmit={onSubmit} />;
};

export default EmitirContrato;
