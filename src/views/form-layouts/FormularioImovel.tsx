// ** React Imports
import { ChangeEvent, MouseEvent, useState, SyntheticEvent } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";


interface State {
  password: string;
  showPassword: boolean;
}

const FormularioImovel = () => {
  // ** States
  const [values, setValues] = useState<State>({
    password: "",
    showPassword: false,
  });
  const [confirmPassValues, setConfirmPassValues] = useState<State>({
    password: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleConfirmPassChange =
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setConfirmPassValues({
        ...confirmPassValues,
        [prop]: event.target.value,
      });
    };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickConfirmPassShow = () => {
    setConfirmPassValues({
      ...confirmPassValues,
      showPassword: !confirmPassValues.showPassword,
    });
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Card>
      <CardContent>
      <CardHeader title="Sobre o imóvel" titleTypographyProps={{ variant: "h6" }} />
        <form onSubmit={(e) => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField fullWidth label="Disponível" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Área" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="IPTU" />
            </Grid>
          </Grid>
        </form>
      </CardContent>

      <CardContent>
      <CardHeader title="Endereço" titleTypographyProps={{ variant: "h6" }} />
        <form onSubmit={(e) => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField fullWidth label="Logradouro" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Número" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Complemento" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="CEP" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Cidade" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Estado" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="País" />
            </Grid>

            <Grid item xs={12}>
              <Box
                sx={{
                  gap: 5,
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Button type="submit" variant="contained" size="large">
                  Adicionar imóvel
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default FormularioImovel;
