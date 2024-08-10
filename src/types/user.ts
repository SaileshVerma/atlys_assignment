export interface User {
  username: string;
  email: string;
  password: string;
  isAuthenticated: boolean;
}

export interface UserLoginStatus {
  usernameError?: string | null;
  passwordError?: string | null;
  token?: string | null;
  user?: User;
  error: boolean;
}

export interface UserSignupStatus {
  usernameError?: string | null;
  emailError?: string | null;
  passwordError?: string | null;
  token?: string | null;
  user?: User;
  error: boolean;
}
