// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Imovel } from "src/models";
import AddressCard from "./AddressCard";
import { CurrencyBrl, Home, CheckCircle, CloseCircle } from "mdi-material-ui";

type PropertyCardProps = {
  imovel: Imovel;
  onCreateAdClick: Function;
  onEditPropertyClick: Function;
};

const PropertyCard: React.FC<PropertyCardProps> = ({ imovel }) => {
  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            mb: 1,
            ml: 8,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Typography variant="body2">
            {`${imovel.tipo} | ${imovel.area} m²`}
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
        <Button>Editar Imóvel</Button>
        {imovel.disponivel && <Button>Criar Anúncio</Button>}
      </CardActions>
    </Card>
  );
};

export default PropertyCard;
