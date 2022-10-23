import React from "react";

// ** MUI Imports
import Grid from "@mui/material/Grid";

// ** Styled Component
import DatePickerWrapper from "src/@core/styles/libs/react-datepicker";

// ** Demo Components Imports
import FormularioAnuncio from "src/views/form-layouts/FormularioAnuncio";

// import { Container } from './styles';

const CriarAnuncio: React.FC = () => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <FormularioAnuncio />
        </Grid>
      </Grid>
    </DatePickerWrapper>
  );
};

export default CriarAnuncio;
