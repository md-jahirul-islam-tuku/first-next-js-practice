"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function AboutPage() {
  const router = useRouter();
  const isLoggedIn = true;
  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };
  return (
    <div>
      <p>AboutPage</p>
      {/* <Link href={"/about/address"}>Address</Link>
      <br /> */}
      <button className="cursor-pointer" type="button" onClick={handleNavigation}>
        Address BTN
      </button>
    </div>
  );
}
