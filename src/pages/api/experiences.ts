/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { NextApiRequest, NextApiResponse } from "next";
import type { Experiences } from "@prisma/client";
import { PrismaClient } from "../../server/client";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { title, startDate, endDate, description, company }: Experiences =
      req.body;

    try {
      // Create a new experience record in the database
      const newExperience = await prisma.experiences.create({
        data: {
          title,
          startDate,
          endDate,
          description,
          company,
        },
      });

      res.status(201).json(newExperience);
    } catch (error) {
      console.error("Error creating experience:", error);
      res
        .status(500)
        .json({ error: "An error occurred while creating experience." });
    }
  }
  // ... handle other HTTP methods
  else if (req.method === "GET") {
    try {
      const experiences = await prisma.experiences.findMany();
      res.status(200).json(experiences);
    } catch (error) {
      console.error({ error });
      res
        .status(500)
        .json({ error: "An error occurred while fetching experience." });
    }
  } else {
    res.status(405).end();
  }
}
