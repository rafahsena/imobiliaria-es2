import { Grid, Box, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "src/@core/context/searchContext";
import useDebounce from "src/@core/hooks/useDebounce";
import Loading from "src/layouts/components/Loading";
import mock from "src/mock";
import { Anuncio } from "src/models";
import { listarAnuncios } from "src/services/anuncios";
import CardAnuncio from "src/views/cards/CardAnuncioLista";

const ListaDeAnuncios = () => {
  const [anuncios, setAnuncios] = useState<Anuncio[]>([])
  const [isLoading, setIsLoading] = useState(false);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  useEffect(() => {
    setSearchTerm('')
    getAnnouncements()
  }, [])

  const getAnnouncements = async () => {
    setIsLoading(true)
    await listarAnuncios().then((anuncios: Anuncio[]) => {
      setAnuncios(anuncios);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    setAnuncios(searchList())
  }, [debouncedSearchTerm])

  const searchList = () => {
    if (debouncedSearchTerm && anuncios) {
      return anuncios.filter((anuncio: Anuncio) => {
        return anuncio.titulo.toLowerCase().search(debouncedSearchTerm.toLowerCase()) >= 0
      })
    } 
    return anuncios
  }

  return (
    <Grid container spacing="2">
      {!isLoading && anuncios.map((anuncio: Anuncio) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={anuncio.id}>
            <CardAnuncio {...anuncio} />
          </Grid>
        )
      })}
      {anuncios.length === 0 && !isLoading && (
          <Box height={400} display="flex" margin="auto">
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              flex={1}
            >
              <Typography variant="h2">Não existem anúncios ainda!</Typography>
            </Box>
          </Box>
        )}
      {isLoading && anuncios.length === 0 && <Loading />}
    </Grid>
  );
};

export default ListaDeAnuncios;
