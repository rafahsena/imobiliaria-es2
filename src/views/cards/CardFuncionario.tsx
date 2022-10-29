import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { Funcionario } from "src/models";
import { useRouter } from "next/router";

const CardFuncionario = (funcionario: Funcionario) => {
  const router = useRouter();

  return (
    <Card>
      <CardContent
        sx={{ padding: (theme) => `${theme.spacing(3, 5.25, 4)} !important` }}
      >
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          {funcionario.id}. {funcionario.nome}
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
          {funcionario.email}
        </Typography>
        {/* <Typography sx={{ marginBottom: 2 }}>{funcionario.tipo.nome}</Typography> */}
      </CardContent>
      <Button
        variant="contained"
        fullWidth
        onClick={() => router.push(`/detalhes-funcionario/${funcionario.id}`)}
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

export default CardFuncionario;
