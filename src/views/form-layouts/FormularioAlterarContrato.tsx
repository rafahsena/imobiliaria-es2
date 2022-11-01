// ** React Imports
import { useState } from "react";
// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useRouter } from "next/router";

const FormularioAlterarContrato = ({ onSubmit }) => {
  const router = useRouter();

  const [contrato, setContrato] = useState({
    tipo: "v",
    vencimento: new Date(),
    dataAssinatura: new Date(),
    valor: 0,
    imovelId: Number(router.query.id),
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(contrato);
  };

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <CardHeader
            title="Sobre o contrato"
            titleTypographyProps={{ variant: "h6" }}
          />

          <Grid item xs={12} sx={{ marginBottom: 5 }}>
            <Typography>Tipo de contrato</Typography>
            <Select
              autoWidth
              value={contrato.tipo}
              onChange={(value) =>
                setContrato((prevState) => ({
                  ...prevState,
                  tipo: value.target.value,
                }))
              }
            >
              <MenuItem value={"v"}>Venda</MenuItem>
              <MenuItem value={"a"}>Aluguel</MenuItem>
            </Select>
          </Grid>

          <Grid container spacing={5}>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Vencimento"
                  value={contrato.vencimento}
                  onChange={(value: any) =>
                    setContrato((prevState) => ({
                      ...prevState,
                      vencimento: new Date(value),
                    }))
                  }
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Data da Assinatura"
                  value={contrato.dataAssinatura}
                  onChange={(value: any) =>
                    setContrato((prevState) => ({
                      ...prevState,
                      dataAssinatura: new Date(value),
                    }))
                  }
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Valor"
                type="number"
                value={contrato.valor}
                onChange={(value) =>
                  setContrato((prevState) => ({
                    ...prevState,
                    valor: Number(value.target.value),
                  }))
                }
              />
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
                  Emitir Contrato
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default FormularioAlterarContrato;
