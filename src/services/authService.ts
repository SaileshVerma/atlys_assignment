import { User, UserLoginStatus, UserSignupStatus } from "../types/user";

export class AuthService {
  isUserLoggedIn = function () {
    let stringifyUser = localStorage.getItem("currentUser");

    if (stringifyUser) {
      return true;
    }

    return false;
  };

  getCurrentLoggedInUser = function (): User | undefined | null {
    let stringifyUser = localStorage.getItem("currentUser");

    if (stringifyUser) {
      let user: User = JSON.parse(stringifyUser);

      return user;
    }
  };

  logout = function () {
    localStorage.removeItem("currentUser");
  };

  login = function ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): UserLoginStatus {
    const usersStringify = localStorage.getItem("users") ?? "[]";
    const userList: User[] = JSON.parse(usersStringify) ?? [];

    let user;

    user = userList.find((item) => item.username == username);

    if (user) {
      if (user.password != password) {
        return {
          error: true,
          passwordError: "Password is incorrect",
        };
      }
    } else {
      user = userList.find((item) => item.email == username);

      if (user) {
        if (user.password != password) {
          return {
            error: true,
            passwordError: "Password is incorrect",
          };
        }
      }
    }

    if (!user) {
      return {
        error: true,
        usernameError: "username or email does not exists",
      };
    }

    localStorage.setItem("currentUser", JSON.stringify(user));

    return {
      error: false,
      user,
    };
  };

  register = function ({
    email,
    username,
    password,
  }: {
    email: string;
    username: string;
    password: string;
  }): UserSignupStatus {
    const usersStringify = localStorage.getItem("users") ?? "[]";
    const userList: User[] = JSON.parse(usersStringify) ?? [];

    let user: User = {
      email,
      username,
      password,
      isAuthenticated: true,
    };

    if (userList.some((user) => user.email == email)) {
      return {
        error: true,
        emailError: "Email already exists",
      };
    }

    if (userList.some((user) => user.username == username)) {
      return {
        error: true,
        usernameError: "Username already in use",
      };
    }

    userList.push(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
    localStorage.setItem("users", JSON.stringify(userList));

    return {
      error: false,
      user,
    };
  };
}
