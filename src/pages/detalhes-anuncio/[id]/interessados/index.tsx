import { Button, Grid, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import router from "next/router";
import { useEffect, useState } from "react";
import Loading from "src/layouts/components/Loading";
import { Interessado } from "src/models";
import { listarInteressados } from "src/services/interessados";
import CardInteressado from "src/views/cards/CardInteressado";

type ListaDeInteressadosProps = {
  anuncioId: number;
};

const ListaDeInteressados = ({ anuncioId }: ListaDeInteressadosProps) => {
  const [interessados, setInteressados] = useState<Interessado[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getInteressados();
  }, []);

  const getInteressados = async () => {
    setIsLoading(true);
    const interessados = await listarInteressados(anuncioId);
    setInteressados(interessados);
    setIsLoading(false);
  };

  return (
    <Grid container spacing="2">
      {!isLoading &&
        interessados &&
        interessados.map((interessado: Interessado) => (
          <Grid item xs={12} sm={6} md={4} key={interessado.id}>
            <CardInteressado {...interessado} />
          </Grid>
        ))}
      {isLoading && <Loading />}
      {!isLoading && interessados?.length <= 0 && (
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography>Não existem interessados nesse anúncio</Typography>
        </div>
      )}
      <Button
        variant="contained"
        onClick={() => router.push(`/detalhes-anuncio/${anuncioId}`)}
        sx={{
          py: 2.5,
          mt: 2,
          width: "100%",
        }}
      >
        Voltar para o anúncio
      </Button>
    </Grid>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  return {
    props: {
      anuncioId: Number(context.query.id),
    },
  };
};

export default ListaDeInteressados;
