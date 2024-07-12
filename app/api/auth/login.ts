import { NextApiRequest, NextApiResponse } from "next";
import { AxiosError } from "axios";
import strapiApiClient from "@/services/StrapiApiClient";
import cookie from "cookie";

const login = async (req: NextApiRequest, res: NextApiResponse) => {
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

export default login;
