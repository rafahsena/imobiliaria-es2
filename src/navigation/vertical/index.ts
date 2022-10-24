// ** Icon imports
import Login from "mdi-material-ui/Login";
import HomeOutline from "mdi-material-ui/HomeOutline";
import AccountPlusOutline from "mdi-material-ui/AccountPlusOutline";

// ** Type import
import { VerticalNavItemsType } from "src/@core/layouts/types";

// Accepts openInNewTab prop on nav object

const navigation = (props): VerticalNavItemsType => {
  return [
    {
      title: "Imóveis",
      icon: HomeOutline,
      path: "/lista-imoveis",
    },
    {
      title: "Login",
      icon: Login,
      path: "/login",
    },
    ...(props?.shouldShowCreateEmployee
      ? [
          {
            title: "Cadastrar Funcionário",
            icon: AccountPlusOutline,
            path: "/cadastrar-funcionario",
          },
        ]
      : []),
    ...(props?.shouldShowEdit
      ? [
          {
            title: "Editar dados",
            icon: AccountPlusOutline,
            path: "/editar-funcionario",
          },
        ]
      : []),
  ];
};

export default navigation;
