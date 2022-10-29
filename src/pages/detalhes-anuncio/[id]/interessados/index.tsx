import { Grid } from "@mui/material";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import mock from "src/mock";
import { Interessado } from "src/models";
import { listarInteressados } from "src/services/interessados";
import CardInteressado from "src/views/cards/CardInteressado";

type ListaDeInteressadosProps = {
  anuncioId: number
}

const ListaDeInteressados = ({anuncioId}: ListaDeInteressadosProps) => {
  const [interessados, setInteressados] = useState<Interessado[] | null>()

  useEffect(() => {
    getInteressados()
  }, [])

  const getInteressados = async () => {
    setInteressados(await listarInteressados(anuncioId))
  }

  return (
    <Grid container spacing="2">
      {interessados && interessados.map((interessado: Interessado) => (
        <Grid item xs={12} sm={6} md={4} key={interessado.id}>
          <CardInteressado {...interessado} />
        </Grid>
      ))}
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