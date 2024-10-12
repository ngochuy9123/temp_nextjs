"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
  href: string;
};

const DashboardMenuItem = ({ children, href }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        className={cn(
          "block p-2 hover:bg-white dark:hover:bg-zinc-700 rounded-md text-muted-foreground hover:text-foreground",
          isActive &&
            "bg-primary-foreground hover:bg-primary-foreground dark:hover:bg-primary-foreground hover:text-foreground text-foreground"
        )}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
};

export default DashboardMenuItem;
