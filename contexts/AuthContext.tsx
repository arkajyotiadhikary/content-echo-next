import { authService } from "@/services/authServices";
import { createContext, ReactNode, useState } from "react";
interface User {
      id: number;
      username: string;
      emain: string;
      provider: string;
      confirmed: string;
      blocked: string;
      createdAt: string;
      updatedAt: string;
}

interface AuthContextType {
      isAuthenticated: boolean;
      user: User | null;
      isLoading: boolean;
      login: (email: string, password: string) => Promise<void>;
      logout: () => {};
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
      children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
      const [isAuthenticated, setIsAuthenticated] = useState(false);
      const [user, setUser] = useState<User | null>(null);
      const [isLoading, setIsLoading] = useState(true);

      const authLoc = localStorage.getItem("authLoc");

      if (!authLoc) {
            setIsAuthenticated(false);
            setUser(null);
            setIsLoading(false);
            return;
      }
      try {
      } catch (error) {}

      const login = async (email: string, password: string) => {
            try {
                  const data = await authService.login(email, password);
                  console.log("login successfull", data);
                  if (data.user) {
                  }
            } catch (error) {}
      };
};
