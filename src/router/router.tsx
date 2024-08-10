// RouterContext.js
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";

interface RouterContextType {
  currentRoute: string;
  navigateTo: (path: string) => void;
}

// Create the context with a default value
const RouterContext = createContext<RouterContextType>({
  currentRoute: "/login",
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
