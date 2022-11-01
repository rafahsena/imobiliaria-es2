import React, { useState, useEffect } from "react";
import { verContratos } from "src/services/contrato";
import CardContrato from "src/views/cards/CardContrato";

// import { Container } from './styles';

const Contrato: React.FC = () => {
  const [contratos, setContratos] = useState([]);

  const handleGetContratos = async () => {
    try {
      const response = await verContratos();

      setContratos(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleGetContratos();
  }, []);

  return (
    <>
      {contratos.map((contrato) => (
        <CardContrato contrato={contrato} />
      ))}
    </>
  );
};

export default Contrato;
