import React from "react";

// ** MUI Imports
import Grid from "@mui/material/Grid";

// ** Styled Component
import DatePickerWrapper from "src/@core/styles/libs/react-datepicker";

// ** Demo Components Imports
import FormularioImovel from "src/views/form-layouts/FormularioImovel";
import { GetServerSidePropsContext } from "next";
import { getImovel } from "src/services/imovel";
import { Imovel } from "src/models";

type AlterarImovelProps = {
  imovel: Imovel;
};

const AlterarImovel: React.FC<AlterarImovelProps> = ({ imovel }) => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <FormularioImovel imovel={imovel} />
        </Grid>
      </Grid>
    </DatePickerWrapper>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { id } = ctx.query;

  const imovel = await getImovel(Number(id));

  return { props: { imovel } };
};

export default AlterarImovel;
