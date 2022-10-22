import React from "react";
import Grid from "@mui/material/Grid";

import FormularioFuncionario from "src/views/form-layouts/FormularioFuncionario";

const CadastrarFuncionario: React.FC = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={6}>
        <FormularioFuncionario />
      </Grid>
    </Grid>
  );
};

export default CadastrarFuncionario;
