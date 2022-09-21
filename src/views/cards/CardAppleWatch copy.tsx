// ** MUI Imports
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

const CardAppleWatch = () => {
  return (
    <Card>
      <CardContent
        sx={{ padding: (theme) => `${theme.spacing(3, 5.25, 4)} !important` }}
      >
        <Typography variant="h3" sx={{ marginBottom: 2 }}>
          Titulo
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>descrição</Typography>
        <Grid container spacing="2">
          <Grid item>
          <Typography sx={{ marginBottom: 2 }}>Valor</Typography>
          </Grid>
        </Grid>
        <Typography variant="body2">
          3.1GHz 6-core 10th-generation Intel Core i5 processor, Turbo Boost up
          to 4.5GHz
        </Typography>
      </CardContent>
      <Button
        variant="contained"
        sx={{
          py: 2.5,
          width: "100%",
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }}
      >
        Add To Cart
      </Button>
    </Card>
  );
};

export default CardAppleWatch;
