import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Anuncio } from "src/models";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import conversions from "src/utils/conversions";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "src/@core/context/UserContext";
import AddressCard from "./AddressCard";

const AdCard = ({
  id,
  titulo,
  descricao,
  tipo,
  valor,
  dataDeCriacao,
  imovel,
}: Anuncio) => {
  const funcionario = useContext(UserContext);
  const isLogged = funcionario?.user?.id;
  const { moneyFormat, areaFormat, dateFormat } = conversions();
  return (
    <Container>
      <Typography variant="h3" sx={{ marginBottom: 2 }}>
        {titulo}
      </Typography>
      <Typography variant="subtitle1">
        Data de publicação: {dateFormat(dataDeCriacao)}
      </Typography>
      <Typography variant="h6" sx={{ marginY: 2 }}>
        Valor: {moneyFormat(valor)}
      </Typography>
      <Grid container spacing="2">
        <Grid item xl={3}>
          IPTU: {moneyFormat(imovel?.iptu)}
        </Grid>
        <Grid item xl={3}>
          Área: {areaFormat(imovel?.area)}
        </Grid>
        <Grid xl={12}>
          <Typography sx={{ marginY: 4, marginLeft: 2 }}>
            {descricao}
          </Typography>
        </Grid>
        <Grid item xl={12}>
          {imovel?.endereco && <AddressCard endereco={imovel.endereco} />}
        </Grid>
        <Grid item xl={5}>
          <Link href={`/detalhes-anuncio/${id}/interesse`}>
            <Button
              variant="contained"
              sx={{
                py: 2.5,
                mt: 2,
                width: "100%",
              }}
            >
              Preencher Formulário de Interesse
            </Button>
          </Link>
        </Grid>
        <Grid item xl={3}>
          <Link href={`/detalhes-anuncio/${id}/interessados`}>
            {isLogged && (
              <Button
                variant="contained"
                sx={{
                  py: 2.5,
                  mt: 2,
                  width: "100%",
                }}
              >
                Ver Interessados
              </Button>
            )}
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdCard;
