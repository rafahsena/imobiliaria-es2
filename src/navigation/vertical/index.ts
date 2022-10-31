// ** Icon imports
import Login from "mdi-material-ui/Login";
import HomeOutline from "mdi-material-ui/HomeOutline";
import AccountPlusOutline from "mdi-material-ui/AccountPlusOutline";
import AccountOutline from "mdi-material-ui/AccountOutline";
import Shopping from "mdi-material-ui/Shopping";

// ** Type import
import { VerticalNavItemsType } from "src/@core/layouts/types";
import { useContext } from "react";
import { UserContext } from "src/@core/context/UserContext";

const navigation = (): VerticalNavItemsType => {
  const funcionario = useContext(UserContext);
  let user;

  if (funcionario.user) {
    user = funcionario.user;
  }
  return [
    { title: "Anúncios", icon: Shopping, path: "/" },
    ...(user?.id
      ? [
          {
            title: "Imóveis",
            icon: HomeOutline,
            path: "/lista-imoveis",
          },
        ]
      : []),
    ...(user?.id
      ? [
          {
            title: "Funcionários",
            icon: AccountOutline,
            path: "/funcionarios",
          },
        ]
      : []),
    ...(!user?.id
      ? [
          {
            title: "Login",
            icon: Login,
            path: "/login",
          },
        ]
      : []),
  ];
};

export default navigation;
