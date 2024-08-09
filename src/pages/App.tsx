import { LoginPage } from "./login/Login";
import { useCustomRouter } from "../router/router";
import { SignUpPage } from "./signup/SignUp";
import { HomePage } from "./home/Home";
//bg-black/80

function App() {
  const { currentRoute, navigateTo } = useCustomRouter();

  const currentPage = () => {
    switch (currentRoute) {
      case "/":
        return <HomePage />;
      case "/login":
        return <LoginPage />;
      case "/signup":
        return <SignUpPage />;
      default:
        return <HomePage />;
    }
  };

  return <>{currentPage()}</>;
}

export default App;
