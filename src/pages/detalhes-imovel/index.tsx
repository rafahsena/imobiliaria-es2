import { Grid } from '@mui/material'
import { GetServerSideProps } from 'next'
import React from 'react'
import CardAnuncio from 'src/views/cards/CardAnuncio'

const DetalhesImovel = ({ anuncio }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={6} md={4}>
        <CardAnuncio {...anuncio} />
      </Grid>
    </Grid>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  return { props: {
    anuncio : {
      nome: "Casa de praia Jaboti",
      descricao: "Uma ótima casa familiar para você e seus filhos! Aproveite a oportunidade para iniciar seu próprio negócio!",
      tipo: 'R',
      valor: 800000,
      dataDeCriacao: Date.now(),
      imovel: {
        id: 0,
        disponivel: true,
        area: 100,
        iptu: 900,
        endereco: {
          logradouro: "Rua 57",
          cidade: "Aracaju",
          estado: "Sergipe",
          pais: "Brasil",
          cep: "49000-000",
          numero: "111",
          complemento: "bloco 2, apartamento 103",
        },
        tipo: "apartamento",
      },
    }
  }}
}

export default DetalhesImovel