import { newsRouter } from "./routers/news";
import { createTRPCRouter } from "./variable";


export const appRouter = createTRPCRouter({
  news: newsRouter
})

export type AppRouter = typeof appRouter;
