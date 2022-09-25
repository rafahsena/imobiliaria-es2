import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { Imovel } from "src/models";
import { useRouter } from "next/router";

const CardImovelLista = (imovel: Imovel) => {
  const router = useRouter();

  return (
    <Card>
      <CardContent
        sx={{ padding: (theme) => `${theme.spacing(3, 5.25, 4)} !important` }}
      >
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          {imovel.endereco.logradouro}
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
          {imovel.endereco.cidade}/
          {imovel.endereco.estado.slice(0, 2).toUpperCase()},{" "}
          {imovel.endereco.pais}
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          {imovel.tipo}
        </Typography>

      </CardContent>
      <Button
        variant="contained"
        fullWidth
        onClick={() => router.push(`/detalhes-imovel/${imovel.id}`)}
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

export default CardImovelLista;
