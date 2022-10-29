import { Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "src/@core/context/searchContext";
import useDebounce from "src/@core/hooks/useDebounce";
import mock from "src/mock";
import { Anuncio } from "src/models";
import CardAnuncio from "src/views/cards/CardAnuncioLista";

const ListaDeAnuncios = () => {
  const { listaDeAnuncios } = mock();
  const [anuncios, setAnuncios] = useState<Anuncio[] | null>()
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  useEffect(() => {
    setSearchTerm('')
  }, [])

  useEffect(() => {
    setAnuncios(searchList())
  }, [debouncedSearchTerm])

  const searchList = () => {
    if (debouncedSearchTerm) {
      return listaDeAnuncios.filter((anuncio: Anuncio) => {
        return anuncio.titulo.toLowerCase().search(debouncedSearchTerm.toLowerCase()) >= 0
      })
    } 
    return listaDeAnuncios
  }

  return (
    <Grid container spacing="2">
      {anuncios && anuncios.map((anuncio: Anuncio) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={anuncio.id}>
            <CardAnuncio {...anuncio} />
          </Grid>
        )
      })}
    </Grid>
  );
};

export default ListaDeAnuncios;
