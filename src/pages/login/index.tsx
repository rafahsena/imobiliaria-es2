// ** React Imports
import { ReactNode, useContext, useEffect, useState } from "react";

// ** MUI Components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import MuiCard, { CardProps } from "@mui/material/Card";
import MuiFormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";

// ** Layout Import
import BlankLayout from "src/@core/layouts/BlankLayout";
import { UserContext } from "src/@core/context/UserContext";
import { login } from "src/services/login";
import router from "next/router";

// ** Demo Imports

interface State {
  password: string;
  showPassword: boolean;
}

// ** Styled Components
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up("sm")]: { width: "28rem" },
}));

const LinkStyled = styled("a")(({ theme }) => ({
  fontSize: "0.875rem",
  textDecoration: "none",
  color: theme.palette.primary.main,
}));

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(
  ({ theme }) => ({
    "& .MuiFormControlLabel-label": {
      fontSize: "0.875rem",
      color: theme.palette.text.secondary,
    },
  })
);

const LoginPage = () => {
  // ** State
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await login({ email, password: senha });
      if (user) {
        setUser(user);
        router.push("/lista-imoveis");
      }
    } catch (e) {
      console.log(e);
    }
  };

  // ** Hook

  return (
    <Box className="content-center">
      <Card sx={{ zIndex: 1 }}>
        <CardContent
          sx={{ padding: (theme) => `${theme.spacing(12, 9, 7)} !important` }}
        >
          <Box
            sx={{
              mb: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                ml: 3,
                lineHeight: 1,
                fontWeight: 600,
                textTransform: "uppercase",
                fontSize: "1.5rem !important",
              }}
            >
              KIT IN NET
            </Typography>
          </Box>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              autoFocus
              fullWidth
              id="email"
              label="Email"
              sx={{ marginBottom: 4 }}
              value={email}
              onChange={(value) => setEmail(value.target.value)}
            />
            <TextField
              autoFocus
              fullWidth
              id="email"
              label="Senha"
              sx={{ marginBottom: 4 }}
              type="password"
              value={senha}
              onChange={(value) => setSenha(value.target.value)}
            />

            <Button
              fullWidth
              size="large"
              variant="contained"
              sx={{ marginBottom: 7, marginTop: 7 }}
              type="submit"
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

LoginPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

export default LoginPage;
