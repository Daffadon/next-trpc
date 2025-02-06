import { z } from "zod";

export const addArticleSchema = z
  .object({
    title: z.string().min(1, { message: "Title is required" }).max(100),
    author: z.string().min(1, { message: "Author is required" }).max(100),
    source: z.string().min(1, { message: "Source is required" }).max(100),
    description: z
      .string()
      .min(1, { message: "Description is required" })
      .max(1000),
    image: z
      .string()
      .min(1, { message: "ImageURL is required" })
      .url({ message: "ImageURL must be a valid URL" })
      .refine((url) => url.startsWith("https"), {
        message: "This is not valid URL",
      }),
    content: z.string().min(1, {
      message: "Content is required",
    }),
  })
  .strict();

export const registerSchema = z
  .object({
    firstName: z.string().min(1, { message: "First Name is required" }),
    lastName: z.string().min(1, { message: "Last Name is required" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Email must be a valid email address" }),
    affiliate: z.string().min(1, { message: "Affiliate is required" }),
    password: z.string().min(1, { message: "Password is required" }),
    confirm: z.string().min(1, { message: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Password doesn't match",
    path: ["confirm"],
  });

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Email must be a valid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});
