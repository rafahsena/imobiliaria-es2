import React, { useState } from "react";
import FormularioContrato from "src/views/form-layouts/FormularioContrato";
import { useRouter } from "next/router";
import { emitirContrato } from "src/services/contrato";
import Loading from "src/layouts/components/Loading";
// import { Container } from './styles';

type ContractProps = {
  id: Number;
};

const EmitirContrato = ({ id }: ContractProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async ({ contrato, cliente, endereco }) => {
    try {
      setLoading(true);
      const response = await emitirContrato({ contrato, cliente, endereco });

      if (response) {
        router.push(
          `/detalhes-imovel/${router.query.id}/contrato/${response.contrato.id}`
        );
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  return loading ? <Loading /> : <FormularioContrato onSubmit={onSubmit} />;
};

export default EmitirContrato;
