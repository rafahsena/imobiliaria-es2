import React, { useContext } from "react";
import Grid from "@mui/material/Grid";

import FormularioFuncionario from "src/views/form-layouts/FormularioFuncionario";
import { UserContext } from "src/@core/context/UserContext";

const EditarFuncionario: React.FC = () => {
  const { user } = useContext(UserContext);

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={6}>
        <FormularioFuncionario usuario={user} />
      </Grid>
    </Grid>
  );
};

export default EditarFuncionario;
