import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { appRouter } from "@/server/trpc";
import { createTRPCContext } from "@/server/trpc/variable";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: createTRPCContext,
  });

export { handler as GET, handler as POST, handler as PUT, handler as DELETE };
