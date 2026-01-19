import { Cedarville_Cursive } from "next/font/google";
import React from "react";
const cedarville_Cursive = Cedarville_Cursive({
  weight: "400",
  subsets: ["latin"],
});

export const fetchPost = async (id) => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await data.json();
  return post;
};

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = await fetchPost(id);

  return {
    title: `Post-${post.id}` || "Post Details",
    description: post?.body?.slice(0, 150),
  };
}

export default async function PostDetails({ params }) {
  const { id } = await params;
  const post = await fetchPost(id);
  return (
    <div className={`place-items-center ${cedarville_Cursive.className}`}>
      <div className="w-88 border rounded-xl p-5 mt-5">
        <p>Post no: {post.id}</p>
        <h1 className="text-4xl">{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
}
