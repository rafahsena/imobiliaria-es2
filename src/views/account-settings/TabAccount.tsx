// ** React Imports
import { useState, MouseEvent } from "react";

import { useForm, Controller } from "react-hook-form";

// ** MUI Imports
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

// ** Icons Imports
import EyeOutline from "mdi-material-ui/EyeOutline";
import EyeOffOutline from "mdi-material-ui/EyeOffOutline";
import {
  OutlinedInput,
  InputAdornment,
  Switch,
  FormControlLabel,
  Alert,
} from "@mui/material";
import ModalRemoverFuncionario from "../utils/ModalRemoverFuncionario";
import {
  alterarFuncionario,
  removerFuncionario,
} from "src/services/funcionarios";
import router from "next/router";
import { LoadingButton } from "@mui/lab";

const TabAccount = ({ funcionario }) => {
  const { handleSubmit, control } = useForm({ defaultValues: funcionario });
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showPasswordField, setShowPasswordField] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [modalVisible, setModalVisible] = useState(false);

  const handleClickShowNewPassword = () => {
    setShowNewPassword((showNewPassword) => !showNewPassword);
  };

  const handleMouseDownNewPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const deleteEmployee = async () => {
    try {
      const { id } = funcionario;
      await removerFuncionario(id);
      router.push("/funcionarios");
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmit = async (data) => {
    const funcionario = {
      ...data,
      password: showPasswordField ? data.password : undefined,
    };

    try {
      setError("");
      setIsLoading(true);
      await alterarFuncionario(funcionario.id, funcionario);
      setIsLoading(false);
      router.push("/funcionarios");
    } catch (e) {
      setIsLoading(false);
      setError("Não foi possível alterar os dados do cadastro");
    } finally {
    }
  };

  return (
    <CardContent>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={7}>
          <Grid item xs={12} sm={6}>
            <Controller
              name="nome"
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                <TextField
                  fullWidth
                  label="Nome"
                  placeholder="Nome da pessoa"
                  error={!!fieldState.error}
                  helperText={!!fieldState.error && "Campo Obrigatório"}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                <TextField
                  fullWidth
                  type="email"
                  label="Email"
                  placeholder="pessoa@email.com"
                  error={!!fieldState.error}
                  helperText={!!fieldState.error && "Campo Obrigatório"}
                  {...field}
                />
              )}
            />
          </Grid>
        </Grid>
        <FormControlLabel
          sx={{ marginTop: 4 }}
          label="Mudar senha?"
          control={
            <Switch
              value={showPasswordField}
              onChange={(e) => setShowPasswordField(e.target.checked)}
            />
          }
        />

        {showPasswordField && (
          <Grid item xs={12} sm={6} sx={{ marginTop: 6 }}>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="account-settings-new-password">
                    Nova senha
                  </InputLabel>
                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{ required: showPasswordField }}
                    render={({ field, fieldState }) => (
                      <OutlinedInput
                        label="Nova Senha"
                        id="account-settings-new-password"
                        type={showNewPassword ? "text" : "password"}
                        {...field}
                        error={!!fieldState.error}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              edge="end"
                              onClick={handleClickShowNewPassword}
                              aria-label="toggle password visibility"
                              onMouseDown={handleMouseDownNewPassword}
                            >
                              {showNewPassword ? (
                                <EyeOutline />
                              ) : (
                                <EyeOffOutline />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    )}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        )}

        {error && (
          <Alert severity="error" sx={{ marginTop: 4, marginLeft: 4 }}>
            {error}
          </Alert>
        )}

        <Grid item xs={12} sx={{ marginTop: 10 }}>
          <LoadingButton
            loading={isLoading}
            type="submit"
            variant="contained"
            sx={{ marginRight: 3.5 }}
          >
            Salvar alterações
          </LoadingButton>
          <Button
            disabled={isLoading}
            color="error"
            sx={{ marginRight: 3.5 }}
            onClick={() => setModalVisible(true)}
          >
            Remover funcionário
          </Button>
        </Grid>
      </form>

      <ModalRemoverFuncionario
        onClick={deleteEmployee}
        visible={modalVisible}
        closeModal={() => setModalVisible(false)}
      />
    </CardContent>
  );
};

export default TabAccount;
