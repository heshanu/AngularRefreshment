// auth.state.ts
export interface AuthState {
    isAuthenticated: boolean;
    user: any | null; // Replace `any` with the actual user type
    error: string | null;
  }
  
  export const initialAuthState: AuthState = {
    isAuthenticated: false,
    user: null,
    error: null,
  };
  