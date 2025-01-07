import NewsList from "@/components/page/NewsList";
import { serverClient } from "./_trpc/serverClient";

export default async function Home() {
  const news =  await serverClient.news.getNews();
  return (
    <>
      <h1>News App</h1>
      <NewsList news={news} />
    </>
  );
}
