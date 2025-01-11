"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { makeQueryClient, trpcClient } from "./client";
import superjson from "superjson";
import { httpBatchLink } from "@trpc/client";

let clientQueryClientSingleton: QueryClient;
function getQueryClient() {
  if (typeof window === "undefined") {
    return makeQueryClient();
  }
  return (clientQueryClientSingleton ??= makeQueryClient());
}

const TRPCProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = getQueryClient();
  const [trpcClientVariable] = useState(() =>
    trpcClient.createClient({
      links: [
        httpBatchLink({
          transformer: superjson,
          url: "http://localhost:3000/api/trpc",
        }),
      ],
    })
  );
  return (
    <trpcClient.Provider client={trpcClientVariable} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpcClient.Provider>
  );
};

export default TRPCProvider;
