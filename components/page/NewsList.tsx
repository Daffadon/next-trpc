"use client";

import { trpc } from "@/app/_trpc/client";
import { serverClient } from "@/app/_trpc/serverClient";
import NewsCard from "../card/NewsCard";
import Link from "next/link";

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
    <div className="mt-10">
      <div className="flex gap-x-4 gap-y-2 justify-center flex-wrap ">
        {getNews.data ? (
          getNews.data?.map((news) => (
            <Link
              href={`/news/${news.id}`}
              key={news.id}
              className="relative max-w-[25em] w-[20em] sm:w-[22em] md:w-[25em] bg-cover bg-center bg-no-repeat p-5 shadow-lg rounded-md cursor-pointer hover:scale-[101%] duration-100"
              style={{ backgroundImage: `url(${news.image})` }}
            >
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 rounded-md z-10"></div>
              <div className="relative z-20">
                <NewsCard news={news} />
              </div>
            </Link>
          ))
        ) : (
          <div className="text-center font-semibold text-lg">No news found</div>
        )}
      </div>
    </div>
  );
};

export default NewsList;
