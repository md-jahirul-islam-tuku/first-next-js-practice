import { Poppins } from "next/font/google";
import Link from "next/link";
import React from "react";

const poppins = Poppins({
  weight: '400',
  subsets: ["latin"],
});

export const metadata = {
  title: "All posts",
  description: "All posts are here for checking metadata working good",
};

export default async function Posts() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();
  return (
    <div className={`grid grid-cols-3 gap-5 mt-10`}>
      {posts.map((post) => (
        <div key={post.id} className={`w-88 border rounded-xl p-4 ${poppins.className}`}>
          <h1 className="text-3xl">{post.title}</h1>
          <p>{post.body}</p>
          <Link href={`/posts/${post.id}`}>
            <button className="bg-lime-500 p-2 rounded-lg cursor-pointer">
              Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
