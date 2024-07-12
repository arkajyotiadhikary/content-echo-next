import { NextApiRequest, NextApiResponse } from "next";
import strapiApiClient from "@/services/StrapiApiClient";
import axios, { AxiosError } from "axios";
import cookie from "cookie";

export const registerUser = async (user: { username: string; email: string; password: string }) => {
      console.log("user", user);
      try {
            const response = await axios.post(
                  "http://localhost:1337/api/auth/local/register",
                  user
            );
            return response;
      } catch (error) {
            console.error(error);
      }
};

export const authenticateUser = async (req: NextApiRequest, res: NextApiResponse) => {
      if (req.method !== "POST") {
            return res.status(405).end();
      }
      const { identifier, password } = req.body;

      try {
            const strapiRes = await strapiApiClient.post("/auth/local", {
                  identifier,
                  password,
            });

            const jwt = strapiRes.data.jwt;

            res.setHeader(
                  "Set-Cookie",
                  cookie.serialize("jwt", jwt, {
                        httpOnly: true,
                        secure: process.env.NODE_ENV !== "development",
                        maxAge: 60 * 60 * 24,
                        sameSite: "strict",
                        path: "/",
                  })
            );

            res.status(200).json({
                  user: strapiRes.data.user,
            });
      } catch (err) {
            const error = err as AxiosError;
            console.error("Error login!!", error);
            res.status(error.response?.status || 500).json(error.response?.data);
      }
};

export const currentUser = async (req: NextApiRequest, res: NextApiResponse) => {
      try {
            const userResponse = await strapiApiClient.get("/users/me", {
                  headers: {
                        Authorization: `Bearer ${req.cookies.jwt}`,
                  },
            });
            if (userResponse.data) {
                  return res.status(200).json(userResponse.data);
            } else {
                  return res.status(401).json({ error: "Not authorized" });
            }
      } catch (err) {
            const error = err as AxiosError;
            console.error("Error during getting user info", error);
            res.status(error.response?.status || 500).json(error.response?.data);
      }
};
