import { appRouter } from "@/server/trpc";
import { createCallerFactory } from "@/server/trpc/variable";

const caller = createCallerFactory(appRouter)
export const serverClient = caller({})
