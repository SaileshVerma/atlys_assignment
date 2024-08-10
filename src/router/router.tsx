import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { Routes } from "../utils/constants";

interface RouterContextType {
  currentRoute: string;
  navigateTo: (path: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentRoute: Routes.LOGIN,
  navigateTo: () => {},
});

export function RouterProvider({ children }: { children: ReactNode }) {
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, "", path);
    setCurrentRoute(path);
  };

  return (
    <RouterContext.Provider value={{ currentRoute, navigateTo }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useCustomRouter() {
  return useContext(RouterContext);
}
