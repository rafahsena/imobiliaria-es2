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
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// import { Container } from './styles';

const FormularioContrato = ({ onSubmit }) => {
  const [tipo, setTipo] = useState("v");
  const [vencimento, setVencimento] = useState(new Date());
  const [dataAssinatura, setDataAssinatura] = useState(new Date());
  const [valor, setValor] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit();
  };

  return (
    <Card>
      <CardContent>
        <CardHeader
          title="Sobre o contrato"
          titleTypographyProps={{ variant: "h6" }}
        />
        <form onSubmit={handleSubmit}>
          <Grid item xs={12} sx={{ marginBottom: 5 }}>
            <Select
              autoWidth
              value={tipo}
              onChange={(value) => setTipo(value.target.value)}
            >
              <MenuItem value={"v"}>Venda</MenuItem>
              <MenuItem value={"a"}>Aluguel</MenuItem>
            </Select>
          </Grid>

          <Grid container spacing={5}>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Basic example"
                  value={vencimento}
                  onChange={(newValue: any) => {
                    setVencimento(new Date(newValue));
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Basic example"
                  value={dataAssinatura}
                  onChange={(newValue: any) => {
                    setDataAssinatura(new Date(newValue));
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Valor"
                type="number"
                value={valor}
                onChange={(value) => setValor(Number(value.target.value))}
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

export default FormularioContrato;
