import apiClient from "./apiClient";

export const authService = {
      async register(email: string, username: string, password: string) {
            console.log("registering new user");
            const response = await apiClient.post("/api/auth/register", {
                  email,
                  username,
                  password,
            });
            const data = response.data;
            console.log(data);

            if (data.user) {
                  return data.user;
            } else {
                  throw new Error("login failed");
            }
      },
      async login(email: string, password: string) {
            const response = await apiClient.post("/api/auth/login", {
                  identifier: email,
                  password,
            });

            const data = response.data;

            if (data.user) {
                  return data.user;
            } else {
                  throw new Error("login failed");
            }
      },
      async checkAuthStatus() {
            try {
                  const response = await apiClient.get("/api/current-user");
                  if (response.status === 200) {
                        return response.data;
                  }
                  throw new Error("Not authenticated");
            } catch (err) {
                  console.error("error checking auth status");
                  throw err;
            }
      },

      // todo logout
};
