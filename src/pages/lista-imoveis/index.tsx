import { Grid, Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "src/@core/context/UserContext";
import Loading from "src/layouts/components/Loading";
import { Imovel } from "src/models";
import { listarImoveis } from "src/services/imovel";
import CardImovel from "src/views/cards/CardImovelLista";

const ListaDeImoveis = () => {
  const funcionario = useContext(UserContext);

  const [isLoading, setIsLoading] = useState(true);

  const [listaDeImoveis, setListaDeImoveis] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    listarImoveis(funcionario.user.id).then((imoveis) => {
      setListaDeImoveis(imoveis);
      setIsLoading(false);
    });
  }, []);

  return (
    <Grid container spacing="2">
      {listaDeImoveis.length === 0 && isLoading ? (
        <Loading />
      ) : (
        listaDeImoveis.map((imovel: Imovel) => (
          <Grid item xs={12} sm={6} md={4} key={imovel.id}>
            <CardImovel {...imovel} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default ListaDeImoveis;
