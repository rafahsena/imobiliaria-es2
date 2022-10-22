import React from "react";
import Grid from "@mui/material/Grid";

import FormularioInteresse from "src/views/form-layouts/FormularioInteresse";

const Interesse: React.FC = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={6}>
        <FormularioInteresse />
      </Grid>
    </Grid>
  );
};

export default Interesse;
