// ** Icon imports
import Login from "mdi-material-ui/Login";
import HomeOutline from "mdi-material-ui/HomeOutline";
import AccountPlusOutline from "mdi-material-ui/AccountPlusOutline";
import AccountOutline from "mdi-material-ui/AccountOutline";

// ** Type import
import { VerticalNavItemsType } from "src/@core/layouts/types";

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: "Imóveis",
      icon: HomeOutline,
      path: "/lista-imoveis",
    },
    {
      title: "Funcionários",
      icon: AccountOutline,
      path: "/funcionarios",
    },
    {
      title: "Login",
      icon: Login,
      path: "/login",
      openInNewTab: true,
    },
    {
      title: "Register",
      icon: AccountPlusOutline,
      path: "/pages/register",
      openInNewTab: true,
    },
  ];
};

export default navigation;
