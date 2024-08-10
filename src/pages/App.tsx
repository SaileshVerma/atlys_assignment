import { LoginPage } from "./login/Login";
import { useCustomRouter } from "../router/router";
import { SignUpPage } from "./signup/SignUp";
import { HomePage } from "./home/Home";
import { FallbackPage } from "./fallback/FallBack";
//bg-black/80

function App() {
  const { currentRoute } = useCustomRouter();

  const currentPage = () => {
    switch (currentRoute) {
      case "/":
        return <HomePage />;
      case "/login":
        return <LoginPage />;
      case "/signup":
        return <SignUpPage />;
      default:
        return <FallbackPage />;
    }
  };

  return <>{currentPage()}</>;
}

export default App;
