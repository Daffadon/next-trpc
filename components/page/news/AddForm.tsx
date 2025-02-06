"use client";
import { addArticleSchema } from "@/validation/form";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { errorNotification, successNotification } from "@/utils/notification";
import InputCustom from "@/components/input/InputCustom";
import TextAreaCustom from "@/components/input/TextAreaCustom";
import FormCustom from "@/components/form/FormCustom";
import "react-toastify/dist/ReactToastify.css";
import { addArticle } from "@/action/article";

export type addArticleValidation = z.infer<typeof addArticleSchema>;
const AddArticleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<addArticleValidation>({
    resolver: zodResolver(addArticleSchema),
    defaultValues: {
      title: "",
      author: "",
      source: "",
      description: "",
      image: "",
      content: "",
    },
  });
  const addArticleHandler: SubmitHandler<addArticleValidation> = async (
    formData: addArticleValidation
  ) => {
    try {
      await addArticle(formData);
      successNotification("News Added");
      setTimeout(() => {
        window.location.href = "/";
      }, 4000);
    } catch (error) {
      errorNotification("News failed to be added");
    }
  };
  return (
    <div className="flex justify-center">
      <div className=" w-1/2 h-fit bg-white p-8 rounded shadow-xl">
        <h1 className="text-lg font-semibold text-center mb-4">
          Publish New Article
        </h1>
        <FormCustom<addArticleValidation>
          onSubmit={addArticleHandler}
          handleSubmit={handleSubmit}
          formStyle="flex flex-col gap-y-4"
        >
          <InputCustom<addArticleValidation>
            inputTitle="Title"
            registerTitle="title"
            errors={errors}
            register={register}
          />
          <InputCustom<addArticleValidation>
            inputTitle="Author"
            registerTitle="author"
            errors={errors}
            register={register}
          />
          <InputCustom<addArticleValidation>
            inputTitle="Source"
            registerTitle="source"
            errors={errors}
            register={register}
          />
          <InputCustom<addArticleValidation>
            inputTitle="Description"
            registerTitle="description"
            errors={errors}
            register={register}
          />
          <InputCustom<addArticleValidation>
            inputTitle="Image URL"
            registerTitle="image"
            errors={errors}
            register={register}
          />
          <TextAreaCustom
            inputTitle="Content"
            registerTitle="content"
            errors={errors}
            register={register}
            rows={10}
          />
          <div className="flex gap-x-4">
            <Link
              className="flex-1 bg-red-500 text-white p-2 rounded-t-md text-center"
              href="/"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="bg-blue-500 flex-1 text-white p-2 rounded-t-md"
            >
              Publish
            </button>
          </div>
        </FormCustom>
      </div>
    </div>
  );
};

export default AddArticleForm;
