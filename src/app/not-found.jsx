import Link from "next/link";
import React from "react";

export default function NotFoundPage() {
  return (
    <div className="place-content-center h-screen">
      <h1>NotFoundPage 404</h1>
      <Link href={"/"}>Go back to Home</Link>
    </div>
  );
}
