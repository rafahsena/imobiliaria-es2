// ** MUI Imports
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { Interessado } from "src/models";

const CardInteressado = (interessado: Interessado) => {
  return (
    <Card>
      <CardContent
        sx={{ padding: (theme) => `${theme.spacing(3, 5.25, 4)} !important` }}
      >
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          {interessado.nome}
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
          Telefone: {interessado.telefone}
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
          E-mail: {interessado.email}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardInteressado;
