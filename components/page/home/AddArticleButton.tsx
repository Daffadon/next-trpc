"use client";
import Link from "next/link";
import ButtonIcons from "../../button/ButtonIcons";
import { Plus } from "@geist-ui/icons";

const AddArticleButton = () => {
  return (
    <Link href={"/news/add"}>
      <ButtonIcons
        Icon={Plus}
        iconSize={50}
        onClick={() => {}}
        tailwindStyles={
          "fixed flex justify-center items-center right-24 bottom-24 shadow-xl rounded-full h-20 w-20 z-10 bg-white hover:scale-[105%] transition-transform duration-300"
        }
      />
    </Link>
  );
};

export default AddArticleButton;
