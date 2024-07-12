import axios from "axios";

const apiClient = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
      withCredentials: true,
});

export default apiClient;
