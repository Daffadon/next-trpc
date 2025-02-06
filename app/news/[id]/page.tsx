import { trpc } from "@/app/_trpc/serverClient";
import { ArrowLeft } from "@geist-ui/icons";
import Link from "next/link";

export async function generateStaticParams() {
  const article = await trpc.news.getNews();

  return (
    article?.map((news) => ({
      id: news.id.toString(),
    })) || []
  );
}

const NewsDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const data = await trpc.news.getNewsById({
    id: parseInt(id, 10),
  });
  return (
    <div className="flex justify-center items-center py-6">
      <div className=" w-full sm:w-4/5 md:w-3/5 xl:w-1/2 border-r-2 border-l-2 border-gray-200 px-4 flex flex-col">
        <Link href="/" className="mb-2">
          <ArrowLeft size={42} />
        </Link>
        <p>{data?.source}</p>
        <h1 className="text-2xl font-bold">{data?.title}</h1>
        <p className="text-lg font-semibold">
          Authored by {data?.author}, {data?.publishedAt.toLocaleDateString()} -{" "}
          {data?.publishedAt.toLocaleTimeString()}
        </p>
        <p className="text-lg text-gray-600">{data?.description}</p>
        <img
          src={data?.image || ""}
          alt={data?.title || ""}
          className="my-4 w-full"
        />
        <p className="whitespace-pre-wrap text-justify text-md">
          {data?.content}
        </p>
      </div>
    </div>
  );
};

export default NewsDetail;
