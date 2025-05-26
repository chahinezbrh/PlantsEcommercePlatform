import { useEffect } from "react";
import { useAuth } from "../Store/useStore";
export const useInitializeAuth = () => {
  const login = useAuth((state) => state.login);
  const logout = useAuth((state) => state.logout);
  useEffect(() => {
    const storeUser = JSON.parse(localStorage.getItem("userData"));
    const storeToken = JSON.parse(localStorage.getItem("token"));
    if (storeUser && storeToken) {
      login(storeUser);
    } else {
      logout();
    }
  }, [login, logout]);
};