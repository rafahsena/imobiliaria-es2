// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Imovel } from "src/models";
import AddressCard from "./AddressCard";
import { CurrencyUsd, Home, CheckCircle, CloseCircle } from "mdi-material-ui";
import { MouseEventHandler } from "react";

type PropertyCardProps = {
  imovel: Imovel;
  onCreateAdClick: MouseEventHandler<HTMLButtonElement>;
  onEditPropertyClick: MouseEventHandler<HTMLButtonElement>;
  onDeleteClick: MouseEventHandler<HTMLButtonElement>;
  onEmitContrat: MouseEventHandler<HTMLButtonElement>;
  onViewContract: MouseEventHandler<HTMLButtonElement>;
};

const PropertyCard: React.FC<PropertyCardProps> = ({
  imovel,
  onCreateAdClick,
  onEditPropertyClick,
  onDeleteClick,
  onEmitContrat,
  onViewContract,
}) => {
  return (
    <Card>
      <CardContent>
        <Box marginBottom={1}>
          <Typography display="flex" alignItems="center" variant="body2">
            <Home />
            <Box
              marginLeft={2}
            >{`${imovel.tipo.nome} | ${imovel.area} m²`}</Box>
          </Typography>
        </Box>
        <Box marginBottom={1}>
          <Typography display="flex" alignItems="center" variant="body2">
            <CurrencyUsd />
            <Box marginLeft={2}>IPTU: {imovel.iptu} R$</Box>
          </Typography>
        </Box>
        <Box marginBottom={5}>
          <Typography>
            {imovel.disponivel ? (
              <Typography display="flex" alignItems="center" variant="body2">
                <CheckCircle color="success" />
                <Box marginLeft={2}>Imóvel disponível para anúncio</Box>
              </Typography>
            ) : (
              <Box>
                <Typography display="flex" alignItems="center" variant="body2">
                  <CloseCircle color="warning" />
                  <Box marginLeft={2}>Imóvel não disponível para anúncio</Box>
                </Typography>
              </Box>
            )}
          </Typography>
        </Box>
        <Box>
          <AddressCard endereco={imovel.endereco} />
        </Box>
      </CardContent>
      <CardActions className="card-action-dense">
        <Button onClick={onEditPropertyClick}>Editar Imóvel</Button>
        {imovel.disponivel && (
          <Button onClick={onCreateAdClick}>Criar Anúncio</Button>
        )}
        <Button onClick={onEmitContrat}>Emitir Contrato</Button>
        <Button onClick={onViewContract}>Visualizar Contrato</Button>
        <Button color="error" onClick={onDeleteClick}>
          Excluir Imóvel
        </Button>
      </CardActions>
    </Card>
  );
};

export default PropertyCard;
