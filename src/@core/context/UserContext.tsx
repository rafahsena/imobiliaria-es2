import { createContext, useState } from "react";
import { Funcionario } from "src/models";

export type UserContextProps = {
  user: Funcionario;
  setUser: Function;
};

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps
);

const userMock: Funcionario = {
  id: 1,
  nome: "Rafael Sena",
  email: "rafael.sena@imobiliaria.com",
  password: "123456",
};

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<Funcionario>(userMock);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
