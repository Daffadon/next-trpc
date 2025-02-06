"use server";

import { trpc } from "@/app/_trpc/serverClient";
import { addArticleValidation } from "@/components/page/news/AddForm";
import { addArticleSchema } from "@/validation/form";

export const addArticle = async (formData: addArticleValidation) => {
  const validatedData = addArticleSchema.safeParse(formData);
  if (!validatedData.success) {
    return { error: "Invalid format data" };
  }
  try {
    await trpc.news.addNews(validatedData.data);
    return true;
  } catch (error) {
    return false;
  }
};
