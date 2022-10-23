import React from "react";

// ** MUI Imports
import Grid from "@mui/material/Grid";

// ** Styled Component
import DatePickerWrapper from "src/@core/styles/libs/react-datepicker";

// ** Demo Components Imports
import FormularioImovel from "src/views/form-layouts/FormularioImovel";

// import { Container } from './styles';

const AlterarImovel: React.FC = () => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <FormularioImovel />
        </Grid>
      </Grid>
    </DatePickerWrapper>
  );
};

export default AlterarImovel;
