import { createContext, useState } from "react";
import { Funcionario } from "src/models";
import { getUser } from "src/services/login";

export type UserContextProps = {
  user: Funcionario;
  setUser: Function;
};

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps
);

const UserProvider: React.FC = ({ children }) => {
  const data = getUser();
  const [user, setUser] = useState<Funcionario>(data as Funcionario);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
