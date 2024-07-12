import { NextApiRequest, NextApiResponse } from "next";
import { AxiosError } from "axios";
import strapiApiClient from "@/services/StrapiApiClient";

const getAllArticles = async (req: NextApiRequest, res: NextApiResponse) => {
      try {
            const response = await strapiApiClient.get("/articles");
            if (response.data) {
                  res.status(200).json({ data: response.data });
            }
      } catch (err) {}
};
