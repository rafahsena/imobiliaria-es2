// ** React Imports
import { useState, ElementType, ChangeEvent, MouseEvent } from "react";

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
import { OutlinedInput, InputAdornment } from "@mui/material";

interface State {
  newPassword: string;
  currentPassword: string;
  showNewPassword: boolean;
  confirmNewPassword: string;
  showCurrentPassword: boolean;
  showConfirmNewPassword: boolean;
}

const TabAccount = () => {
  // ** State
  const [values, setValues] = useState<State>({
    newPassword: "",
    currentPassword: "",
    showNewPassword: false,
    confirmNewPassword: "",
    showCurrentPassword: false,
    showConfirmNewPassword: false,
  });

  // Handle Current Password
  const handleCurrentPasswordChange =
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  const handleClickShowCurrentPassword = () => {
    setValues({ ...values, showCurrentPassword: !values.showCurrentPassword });
  };
  const handleMouseDownCurrentPassword = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  // Handle New Password
  const handleNewPasswordChange =
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  const handleClickShowNewPassword = () => {
    setValues({ ...values, showNewPassword: !values.showNewPassword });
  };
  const handleMouseDownNewPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  // Handle Confirm New Password
  const handleConfirmNewPasswordChange =
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  const handleClickShowConfirmNewPassword = () => {
    setValues({
      ...values,
      showConfirmNewPassword: !values.showConfirmNewPassword,
    });
  };
  const handleMouseDownConfirmNewPassword = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <CardContent>
      <form>
        <Grid container spacing={7}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              placeholder="John Doe"
              defaultValue="John Doe"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="email"
              label="Email"
              placeholder="johnDoe@example.com"
              defaultValue="johnDoe@example.com"
            />
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6} sx={{ marginTop: 6 }}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="account-settings-new-password">
                  Nova senha
                </InputLabel>
                <OutlinedInput
                  label="New Password"
                  value={values.newPassword}
                  id="account-settings-new-password"
                  onChange={handleNewPasswordChange("newPassword")}
                  type={values.showNewPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={handleClickShowNewPassword}
                        aria-label="toggle password visibility"
                        onMouseDown={handleMouseDownNewPassword}
                      >
                        {values.showNewPassword ? (
                          <EyeOutline />
                        ) : (
                          <EyeOffOutline />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="account-settings-confirm-new-password">
                  Confirme a nova senha
                </InputLabel>
                <OutlinedInput
                  label="Confirm New Password"
                  value={values.confirmNewPassword}
                  id="account-settings-confirm-new-password"
                  type={values.showConfirmNewPassword ? "text" : "password"}
                  onChange={handleConfirmNewPasswordChange(
                    "confirmNewPassword"
                  )}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmNewPassword}
                        onMouseDown={handleMouseDownConfirmNewPassword}
                      >
                        {values.showConfirmNewPassword ? (
                          <EyeOutline />
                        ) : (
                          <EyeOffOutline />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ marginTop: 10 }}>
          <Button variant="contained" sx={{ marginRight: 3.5 }}>
            Salvar alterações
          </Button>
        </Grid>
      </form>
    </CardContent>
  );
};

export default TabAccount;
