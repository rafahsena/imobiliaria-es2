import { Grid, Box, Button, Typography } from "@mui/material";
import router from "next/router";
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

  const onCreateClick = () => router.push("/cadastrar-imovel");

  useEffect(() => {
    setIsLoading(true);
    listarImoveis(funcionario.user.id).then((imoveis) => {
      setListaDeImoveis(imoveis);
      setIsLoading(false);
    });
  }, []);

  return (
    <Box>
      <Button
        sx={{ marginBottom: 4 }}
        onClick={onCreateClick}
        variant="outlined"
      >
        Cadastrar Imóvel
      </Button>
      <Grid container spacing="2">
        {listaDeImoveis.length === 0 && !isLoading && (
          <Box height={400} display="flex" margin="auto">
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              flex={1}
            >
              <Typography variant="h2">Nenhum imóvel cadastrado</Typography>
              <Typography textAlign="center">
                Clique em "Cadastrar Imóvel" para inserir um novo imóvel no
                sistema
              </Typography>
            </Box>
          </Box>
        )}
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
    </Box>
  );
};

export default ListaDeImoveis;
