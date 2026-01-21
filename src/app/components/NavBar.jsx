"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import SignOutUser from "./SignOutUser";
import { useSession } from "next-auth/react";
import LoginPage from "../(authPages)/login/page";

export default function NavBar() {
  const { data: session } = useSession();
  const pathname = usePathname();
  if (pathname.includes("dashboard")) {
    return null;
  }
  return (
    <div>
      <nav className="flex justify-center">
        <ul className="flex gap-5">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/services"}>
            <li>Services</li>
          </Link>
          <Link href={"/about"}>
            <li>About</li>
          </Link>
          {!session && (
            <>
              <li>
                <Link href="">
                  <LoginPage />
                </Link>
              </li>
              <li>
                <Link href="/register">Register</Link>
              </li>
            </>
          )}
          <Link href={"/posts"}>
            <li>Posts</li>
          </Link>
          <Link href={"/meals"}>
            <li>Meals</li>
          </Link>
          {session && (
            <>
              <Link href={"/users"}>
                <li>Users</li>
              </Link>
              <li>
                <Link href="">
                  <SignOutUser />
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
