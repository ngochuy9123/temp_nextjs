import React from "react";
import DashboradMenuTitle from "./menu-title";
import DashboardMenuItem from "./menu-item";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import LightDarkToggle from "@/components/ui/light-dark-toggle";

const DashboardMainMenu = () => {
  return (
    <nav className="bg-muted overflow-auto p-4 flex flex-col h-full">
      <header className="border-b dark:border-b-black border-b-zinc-300 pb-4">
        <DashboradMenuTitle />
      </header>
      <ul className="py-4 grow">
        <DashboardMenuItem href="/Dashboard">My Dashboard</DashboardMenuItem>
        <DashboardMenuItem href="/Dashboard/Teams">Teams</DashboardMenuItem>
        <DashboardMenuItem href="/Dashboard/Employees">
          Employees
        </DashboardMenuItem>
        <DashboardMenuItem href="/Dashboard/Account">Account</DashboardMenuItem>
        <DashboardMenuItem href="/Dashboard/Settings">
          Setting
        </DashboardMenuItem>
      </ul>
      <footer className=" flex gap-2 items-center">
        <Avatar>
          <AvatarFallback className="bg-pink-300 dark:bg-pink-800">
            TP
          </AvatarFallback>
        </Avatar>
        <Link href={"/"} className="hover:underline">
          Logout
        </Link>
        <LightDarkToggle className="ml-auto"></LightDarkToggle>
      </footer>
    </nav>
  );
};

export default DashboardMainMenu;
