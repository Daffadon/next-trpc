import { prisma } from "@/server/db";
import { createTRPCRouter, publicProcedure } from "../variable";
import z from "zod";

export const newsRouter = createTRPCRouter({
  getNews: publicProcedure.query(async () => {
    try {
      const news = await prisma.news.findMany();
      return news;
    } catch (error) {
      return null;
    }
  }),
  getNewsByTitle: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      try {
        const news = await prisma.news.findFirst({
          where: {
            id: input.id,
          },
        });
        return news;
      } catch (error) {
        return null;
      }
    }),
});
