"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavBar() {
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
          <Link href={"/login"}>
            <li>Login</li>
          </Link>
          <Link href={"/register"}>
            <li>Register</li>
          </Link>
          <Link href={"/posts"}>
            <li>Posts</li>
          </Link>
          <Link href={"/meals"}>
            <li>Meals</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
