// ** MUI Imports
import Grid from "@mui/material/Grid";

// ** Icons Imports
import Poll from "mdi-material-ui/Poll";
import CurrencyUsd from "mdi-material-ui/CurrencyUsd";
import HelpCircleOutline from "mdi-material-ui/HelpCircleOutline";
import BriefcaseVariantOutline from "mdi-material-ui/BriefcaseVariantOutline";

// ** Custom Components Imports
import CardStatisticsVerticalComponent from "src/@core/components/card-statistics/card-stats-vertical";

// ** Styled Component Import
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";

// ** Demo Components Imports
import Table from "src/views/dashboard/Table";
import Trophy from "src/views/dashboard/Trophy";
import TotalEarning from "src/views/dashboard/TotalEarning";
import StatisticsCard from "src/views/dashboard/StatisticsCard";
import WeeklyOverview from "src/views/dashboard/WeeklyOverview";
import DepositWithdraw from "src/views/dashboard/DepositWithdraw";
import SalesByCountries from "src/views/dashboard/SalesByCountries";
import ListaDeAnuncios from "./lista-anuncios";
import DetalhesImovel from "./detalhes-anuncio/[id]";

const Dashboard = () => {
  return <ListaDeAnuncios />;
};

export default Dashboard;
