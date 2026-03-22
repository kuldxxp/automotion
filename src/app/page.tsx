
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { getQueryClient, trpc } from "@/trpc/server";
import { Client } from "./client";

const Page = async () => {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(trpc.getUsers.queryOptions());

  return (
    <div className="text-black-500 font-bold font-mono">
      Wakeup Kuldeep
      <div className="min-h-screen min-w-screen flex items-center justify-center">
        <Button variant={"outline"}>
          Click Me
        </Button>

        <HydrationBoundary state={ dehydrate(queryClient) }>
          <Suspense fallback={ <p>loading...</p> }>
            <Client />
          </Suspense>
        </HydrationBoundary>
      </div>
    </div>
  );
};

export default Page;