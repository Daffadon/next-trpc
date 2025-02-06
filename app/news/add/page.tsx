import Navbar from "@/components/appbar/Navbar";
import AddArticleForm from "@/components/page/news/AddForm";
import React from "react";
import "react-toastify/dist/ReactToastify.css";

const AddArticle = () => {
  return (
    <>
      <Navbar />
      <AddArticleForm />
    </>
  );
};

export default AddArticle;
