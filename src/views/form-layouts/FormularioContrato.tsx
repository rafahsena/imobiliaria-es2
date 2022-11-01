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

const FormularioContrato = ({ onSubmit }) => {
  const router = useRouter();

  const [contrato, setContrato] = useState({
    tipo: "v",
    vencimento: new Date(),
    dataAssinatura: new Date(),
    valor: 0,
    imovelId: Number(router.query.id),
  });

  const [cliente, setCliente] = useState({
    nome: "",
    cpf: "",
    rg: "",
    dataNascimento: new Date(),
    telefone: "",
    email: "",
  });

  const [enderecoCliente, setEnderecoCliente] = useState({
    logradouro: "",
    cidade: "",
    estado: "",
    pais: "",
    cep: "",
    complemento: "",
    numero: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ contrato, cliente, endereco: enderecoCliente });
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

            <CardHeader
              title="Sobre o cliente"
              titleTypographyProps={{ variant: "h6" }}
            />

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nome"
                value={cliente.nome}
                onChange={(value) =>
                  setCliente((prevState) => ({
                    ...prevState,
                    nome: value.target.value,
                  }))
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="CPF"
                value={cliente.cpf}
                onChange={(value) =>
                  setCliente((prevState) => ({
                    ...prevState,
                    cpf: value.target.value,
                  }))
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="RG"
                value={cliente.rg}
                onChange={(value) =>
                  setCliente((prevState) => ({
                    ...prevState,
                    rg: value.target.value,
                  }))
                }
              />
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Data de Nascimento"
                  value={cliente.dataNascimento}
                  onChange={(value: any) =>
                    setCliente((prevState) => ({
                      ...prevState,
                      dataNascimento: new Date(value),
                    }))
                  }
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Telefone"
                value={cliente.telefone}
                onChange={(value) =>
                  setCliente((prevState) => ({
                    ...prevState,
                    telefone: value.target.value,
                  }))
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                value={cliente.email}
                onChange={(value) =>
                  setCliente((prevState) => ({
                    ...prevState,
                    email: value.target.value,
                  }))
                }
              />
            </Grid>

            <CardHeader
              title="Endereço do cliente"
              titleTypographyProps={{ variant: "h6" }}
            />

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Logradouro"
                value={enderecoCliente.logradouro}
                onChange={(value) =>
                  setEnderecoCliente((prevState) => ({
                    ...prevState,
                    logradouro: value.target.value,
                  }))
                }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Cidade"
                value={enderecoCliente.cidade}
                onChange={(value) =>
                  setEnderecoCliente((prevState) => ({
                    ...prevState,
                    cidade: value.target.value,
                  }))
                }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Estado"
                value={enderecoCliente.estado}
                onChange={(value) =>
                  setEnderecoCliente((prevState) => ({
                    ...prevState,
                    estado: value.target.value,
                  }))
                }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="CEP"
                value={enderecoCliente.cep}
                onChange={(value) =>
                  setEnderecoCliente((prevState) => ({
                    ...prevState,
                    cep: value.target.value,
                  }))
                }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="País"
                value={enderecoCliente.pais}
                onChange={(value) =>
                  setEnderecoCliente((prevState) => ({
                    ...prevState,
                    pais: value.target.value,
                  }))
                }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Complemento"
                value={enderecoCliente.complemento}
                onChange={(value) =>
                  setEnderecoCliente((prevState) => ({
                    ...prevState,
                    complemento: value.target.value,
                  }))
                }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Número"
                value={enderecoCliente.numero}
                onChange={(value) =>
                  setEnderecoCliente((prevState) => ({
                    ...prevState,
                    numero: value.target.value,
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

export default FormularioContrato;
