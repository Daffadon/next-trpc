import NewsList from "@/components/page/NewsList";
import { HydrateClient, trpc } from "./_trpc/serverClient";

export default async function Home() {
  const news = await trpc.news.getNews();
  return (
    <HydrateClient>
      <h1 className="text-xl pt-4 text-center font-semibold">News App</h1>
      <NewsList news={news} />
    </HydrateClient>
  );
}
