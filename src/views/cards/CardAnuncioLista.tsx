// ** MUI Imports
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { Anuncio } from "src/models";
import { useRouter } from "next/router";
import conversions from "src/utils/conversions";

const AdCardList = (anuncio: Anuncio) => {
  const router = useRouter();
  const { moneyFormat } = conversions();
  return (
    <Card>
      <CardContent
        sx={{ padding: (theme) => `${theme.spacing(3, 5.25, 4)} !important` }}
      >
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          {anuncio.titulo}
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
          {anuncio.descricao}
        </Typography>
        <Typography variant="subtitle2" sx={{ marginBottom: 2 }}>
          {anuncio.tipo === "v" ? "Venda" : "Aluguel"}
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          {moneyFormat(anuncio.valor)}
        </Typography>
      </CardContent>
      <Button
        variant="contained"
        fullWidth
        onClick={() => router.push(`/detalhes-anuncio/${anuncio.id}`)}
        sx={{
          py: 2.5,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }}
      >
        Detalhes
      </Button>
    </Card>
  );
};

export default AdCardList;
