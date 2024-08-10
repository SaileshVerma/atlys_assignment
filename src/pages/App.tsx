import { LoginPage } from "./login/Login";
import { useCustomRouter } from "../router/router";
import { SignUpPage } from "./signup/SignUp";
import { HomePage } from "./home/Home";
import { FallbackPage } from "./fallback/FallBack";
import { useEffect } from "react";
import { AuthService } from "../services/authService";
import { Routes } from "../utils/constants";
//bg-black/80

function App() {
  const { currentRoute, navigateTo } = useCustomRouter();

  useEffect(() => {
    if (window.location.pathname === "/") {
      const authService = new AuthService();
      const getCurrentUser = authService.getCurrentLoggedInUser();
      if (!getCurrentUser) {
        navigateTo(Routes.LOGIN);
      }
    }
  }, []);

  const currentPage = () => {
    switch (currentRoute) {
      case Routes.HOME:
        return <HomePage />;
      case Routes.LOGIN:
        return <LoginPage />;
      case Routes.SIGNUP:
        return <SignUpPage />;
      default:
        return <FallbackPage />;
    }
  };

  return <>{currentPage()}</>;
}

export default App;
