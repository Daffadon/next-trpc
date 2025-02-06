import { prisma } from "@/server/db";
import { createTRPCRouter, publicProcedure } from "../variable";
import z from "zod";
import { addArticleSchema } from "@/validation/form";
import { TRPCError } from "@trpc/server";

export const newsRouter = createTRPCRouter({
  getNews: publicProcedure.query(async () => {
    try {
      const news = await prisma.news.findMany();
      return news;
    } catch (error) {
      return null;
    }
  }),
  getNewsById: publicProcedure
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
  addNews: publicProcedure
    .input(addArticleSchema)
    .mutation(async ({ input }) => {
      if (!input || typeof input !== "object") {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Received null or invalid input",
        });
      }
      try {
        const news = await prisma.news
          .create({
            data: {
              ...input,
              publishedAt: new Date(),
            },
          })
          .catch((err) => {
            throw new TRPCError({
              code: "INTERNAL_SERVER_ERROR",
              message: "Database issue",
            });
          });
        return input;
      } catch (error: any) {
        if (error instanceof TRPCError) {
          return error;
        }
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something wrong with db transaction",
        });
      }
    }),
});
