import { prisma } from "@/server/db";
import { createTRPCRouter, publicProcedure } from "../variable";

export const newsRouter = createTRPCRouter({
  getNews: publicProcedure.query(() => {
    return prisma.news.findMany();
  }),
});
