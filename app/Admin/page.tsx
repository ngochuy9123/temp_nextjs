import { Button } from "@/components/ui/button";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="flex gap-2 items-center">
        <PersonStandingIcon size={50} className="text-pink-600 " /> Support Me
      </h1>
      <p>Dashboard support manage Post of social media</p>
      <div className="flex gap-2 items-center justify-center">
        <Button asChild>
          <Link href="Admin/Login">Log in</Link>
        </Button>
        <small>or</small>
        <Button variant={"outline"} asChild>
          <Link href="Admin/Signup">Sign up</Link>
        </Button>
      </div>
    </div>
  );
};

export default page;
