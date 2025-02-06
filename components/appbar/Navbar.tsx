import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <nav className="flex justify-between items-center px-10">
      <Link href={"/"}>
        <h1 className="text-3xl pt-6 text-center font-bold w-max">News App</h1>
      </Link>
      {session ? (
        <>
          <p>{session.user.name}</p>
        </>
      ) : (
        <Link href={"/login"} className="">
          <h1 className="text-lg pt-6 text-center font w-max hover:underline transition-all">
            Login
          </h1>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
