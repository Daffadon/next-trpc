import { appRouter } from "@/server/trpc";
import { createCallerFactory, createTRPCContext } from "@/server/trpc/variable";
import { cache } from "react";
import { makeQueryClient } from "./client";
import { createHydrationHelpers } from "@trpc/react-query/rsc";

export const serverQueryClient = cache(makeQueryClient);
const caller = createCallerFactory(appRouter)(createTRPCContext);

export const { trpc, HydrateClient } = createHydrationHelpers<typeof appRouter>(
  caller,
  serverQueryClient
);
