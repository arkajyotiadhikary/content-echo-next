import apiClient from "./apiClient";

export const articleServices = {
      async getArticles() {
            const response = await apiClient.get("/api/articles");
      },
};
