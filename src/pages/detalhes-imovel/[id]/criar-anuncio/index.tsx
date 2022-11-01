import React from "react";

// ** MUI Imports
import Grid from "@mui/material/Grid";

// ** Styled Component
import DatePickerWrapper from "src/@core/styles/libs/react-datepicker";

// ** Demo Components Imports
import FormularioAnuncio from "src/views/form-layouts/FormularioAnuncio";

type CriarAnuncioProps = {
  imovelId: number;
};
const CriarAnuncio: React.FC<CriarAnuncioProps> = ({ imovelId }) => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <FormularioAnuncio imovelId={imovelId} />
        </Grid>
      </Grid>
    </DatePickerWrapper>
  );
};

export const getServerSideProps = (ctx) => {
  const { id } = ctx.query;
  return { props: { imovelId: Number(id) } };
};

export default CriarAnuncio;
