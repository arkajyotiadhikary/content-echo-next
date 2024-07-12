import { NextApiRequest, NextApiResponse } from "next";
import { AxiosError } from "axios";
import strapiApiClient from "@/services/StrapiApiClient";

const currentUser = async (req: NextApiRequest, res: NextApiResponse) => {
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
export default currentUser;
