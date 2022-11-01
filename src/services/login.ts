import { api } from "./api";

export const login = async (login) => {
  try {
    const response = await api.post("/login", login);
    const loginData = response.data;

    localStorage.setItem("login", JSON.stringify(loginData));
    return loginData;
  } catch (e) {
    console.log(e);
    throw new Error();
  }
};

export const getUser = () => {
  if (typeof window === "undefined") return;
  const user = localStorage.getItem("login");
  if (!user) return;
  return JSON.parse(user);
};

export const logout = () => {
  if (typeof window === "undefined") return;
  localStorage.removeItem("login");
};
