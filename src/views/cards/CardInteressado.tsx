// ** MUI Imports
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { Interessado } from "src/models";
import { Button } from "@mui/material";
import { deletarInteressado } from "src/services/interessados";
import router from "next/router";

const CardInteressado = (interessado: Interessado) => {

  const handleDelete = async () => {
    await deletarInteressado(interessado.id);
    router.reload()
  }

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
        <Button
          variant="contained"
          onClick={handleDelete}
          sx={{
            py: 2.5,
            mt: 2,
            width: "100%",
          }}
        >
          Deletar interessado
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardInteressado;
