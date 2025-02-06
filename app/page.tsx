import NewsList from "@/components/page/home/NewsList";
import { HydrateClient, trpc } from "./_trpc/serverClient";
import AddArticleButton from "@/components/page/home/AddArticleButton";
import Navbar from "@/components/appbar/Navbar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const news = await trpc.news.getNews();
  return (
    <HydrateClient>
      <Navbar />
      <NewsList news={news} />
      <AddArticleButton />
    </HydrateClient>
  );
}
