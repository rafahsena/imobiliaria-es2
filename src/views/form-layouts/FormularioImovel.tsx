// ** React Imports
import { useContext, useState } from "react";

import { useForm, Controller } from "react-hook-form";

// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { cadastrarImovel } from "src/services/imovel";
import {
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Alert,
} from "@mui/material";
import { UserContext } from "src/@core/context/UserContext";
import { LoadingButton } from "@mui/lab";
import router from "next/router";

const FormularioImovel = () => {
  const { handleSubmit, control } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const funcionario = useContext(UserContext);

  const tiposEnum = [
    {
      value: 1,
      label: "Casa",
    },
    {
      value: 2,
      label: "Terreno",
    },
    {
      value: 3,
      label: "Apartamento",
    },
  ];

  const onSubmit = async (data: any) => {
    try {
      const imovel = {
        ...data,
        funcionarioId: funcionario.user.id,
        disponivel: Boolean(data.disponivel),
      };
      setError("");
      setIsLoading(true);
      await cadastrarImovel(imovel);
      setIsLoading(false);
      router.push("/lista-imoveis");
    } catch (err) {
      setIsLoading(false);
      setError("Não foi possível cadastrar o imóvel");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <CardHeader
            title="Sobre o imóvel"
            titleTypographyProps={{ variant: "h6" }}
          />
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Controller
                name="disponivel"
                control={control}
                defaultValue={1}
                render={({ field, fieldState }) => (
                  <Select
                    error={!!fieldState.error}
                    autoWidth
                    {...field}
                    onChange={(e) => field.onChange(e.target.value)}
                  >
                    <MenuItem value={1}>Disponível</MenuItem>
                    <MenuItem value={0}>Indisponível</MenuItem>
                  </Select>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <FormLabel>Tipo de Imóvel</FormLabel>
                <Controller
                  name="tipoId"
                  control={control}
                  defaultValue={1}
                  render={({ field }) => (
                    <RadioGroup
                      aria-labelledby="radio-buttons-group-label"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    >
                      {tiposEnum.map((tipo) => (
                        <FormControlLabel
                          key={tipo.value}
                          control={<Radio />}
                          value={tipo.value}
                          label={tipo.label}
                        />
                      ))}
                    </RadioGroup>
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="area"
                control={control}
                defaultValue={0}
                rules={{ required: true, min: 1 }}
                render={({ field, fieldState }) => {
                  return (
                    <TextField
                      {...field}
                      error={!!fieldState.error}
                      helperText={
                        !!fieldState.error &&
                        "Campo inválido. Por favor, tente novamente."
                      }
                      fullWidth
                      type="number"
                      label="Área (m²)"
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  );
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="iptu"
                control={control}
                defaultValue={0}
                rules={{ required: true, min: 1 }}
                render={({ field, fieldState }) => (
                  <TextField
                    error={!!fieldState.error}
                    helperText={
                      !!fieldState.error &&
                      "Campo inválido. Por favor, tente novamente."
                    }
                    {...field}
                    fullWidth
                    type="number"
                    label="IPTU (R$)"
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                )}
              />
            </Grid>
          </Grid>
        </CardContent>

        <CardContent>
          <CardHeader
            title="Endereço"
            titleTypographyProps={{ variant: "h6" }}
          />

          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Controller
                name="endereco.logradouro"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <TextField
                    error={!!fieldState.error}
                    helperText={
                      !!fieldState.error &&
                      "Campo inválido. Por favor, tente novamente."
                    }
                    {...field}
                    fullWidth
                    label="Logradouro"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="endereco.numero"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <TextField
                    error={!!fieldState.error}
                    helperText={
                      !!fieldState.error &&
                      "Campo inválido. Por favor, tente novamente."
                    }
                    {...field}
                    fullWidth
                    label="Número"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="endereco.complemento"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    error={!!fieldState.error}
                    helperText={
                      !!fieldState.error &&
                      "Campo inválido. Por favor, tente novamente."
                    }
                    {...field}
                    fullWidth
                    label="Complemento (opcional)"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="endereco.cep"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <TextField
                    error={!!fieldState.error}
                    helperText={
                      !!fieldState.error &&
                      "Campo inválido. Por favor, tente novamente."
                    }
                    {...field}
                    fullWidth
                    label="CEP"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="endereco.cidade"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <TextField
                    error={!!fieldState.error}
                    helperText={
                      !!fieldState.error &&
                      "Campo inválido. Por favor, tente novamente."
                    }
                    {...field}
                    fullWidth
                    label="Cidade"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="endereco.estado"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <TextField
                    error={!!fieldState.error}
                    helperText={
                      !!fieldState.error &&
                      "Campo inválido. Por favor, tente novamente."
                    }
                    {...field}
                    fullWidth
                    label="Estado"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="endereco.pais"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <TextField
                    error={!!fieldState.error}
                    helperText={
                      !!fieldState.error &&
                      "Campo inválido. Por favor, tente novamente."
                    }
                    {...field}
                    fullWidth
                    label="País"
                  />
                )}
              />
            </Grid>
            {error && (
              <Alert severity="error" sx={{ marginTop: 4, marginLeft: 4 }}>
                {error}
              </Alert>
            )}

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
                <LoadingButton
                  loading={isLoading}
                  type="submit"
                  variant="contained"
                  size="large"
                >
                  Adicionar imóvel
                </LoadingButton>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </form>
    </Card>
  );
};

export default FormularioImovel;
