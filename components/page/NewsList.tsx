"use client";
import { trpc } from "@/app/_trpc/client";
import { serverClient } from "@/app/_trpc/serverClient";
const NewsList = ({
  news,
}: {
  news: Awaited<ReturnType<(typeof serverClient)["news"]["getNews"]>>;
}) => {
  const getNews = trpc.news.getNews.useQuery(undefined, {
    initialData: news,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
  return (
    <div>
      <h1>list of news</h1>
      <ul>
        {getNews.data?.map((news) => (
          <li key={news.id}>{news.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
