import { News } from "@prisma/client";

const NewsCard = ({ news }: { news: News }) => {
  return (
    <div className="flex p-5 rounded-md z-10 relative w-full">
      <div className="w-full">
        <div className="flex items-center justify-between text-white w-full">
          <p className="text-sm text-yellow-500">
            {news.publishedAt.toLocaleDateString()}
          </p>
          <p className="text-sm text-right underline">{news.source}</p>
        </div>
        <h6 className="text-md mt-2 w-full font-semibold text-white">
          {news.title}
        </h6>
        <h6 className="text-sm w-full text-white">
          Authored By{" "}
          <span className="font-semibold text-yellow-400">{news.author}</span>
        </h6>
        <p className="text-sm w-full text-white mt-4">{news.description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
