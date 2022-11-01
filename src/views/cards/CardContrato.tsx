import { Card, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Contrato } from "@prisma/client";
import conversions from "src/utils/conversions";
import { useRouter } from "next/router";

type CardContratoProps = {
  contrato: Contrato;
};

const CardContrato: React.FC<CardContratoProps> = ({ contrato }) => {
  const { moneyFormat } = conversions();
  const router = useRouter();

  return (
    <Card>
      <CardContent
        sx={{ padding: (theme) => `${theme.spacing(3, 5.25, 4)} !important` }}
      >
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          {contrato.id}
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 2 }}></Typography>
        <Typography variant="subtitle2" sx={{ marginBottom: 2 }}>
          {new Date(contrato.vencimento).getDate()}/
          {new Date(contrato.vencimento).getMonth() + 1}/
          {new Date(contrato.vencimento).getFullYear()}
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          {moneyFormat(Number(contrato.valor))}
        </Typography>
      </CardContent>
      <Button
        variant="contained"
        fullWidth
        onClick={() =>
          router.push(
            `/detalhes-imovel/${contrato.imovelId}/contrato/${contrato.id}`
          )
        }
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

export default CardContrato;
