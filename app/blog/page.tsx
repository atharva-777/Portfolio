"use client";
import { BsBack } from "react-icons/bs";
import { AiFillBackward } from "react-icons/ai";
import { client } from "../lib/sanity";
import Link from "next/link";
import { blog } from "../lib/interface";
import { useState, useEffect } from "react";
// async function getData() {
//     console.log('requesting data')
//   const query = `*[_type=='blog']`;
//   const data = await client.fetch(query);
//   return data;
// }
// await getData() as blog[];

export default async function Blog() {
  const [posts, setPosts] = useState<blog[]>();
  const aa = async () => {
    console.log("request intiated");
    const x = await fetch(`/api`);
    const data = (await x.json()) as blog[];
    setPosts(data);
    return data;
  };
  useEffect(() => {
    const data = aa();
    console.log(`data -> `, data);
  }, []);

  return (
    <div className="mt-40">
      <Link href="/" className="mx-auto">
        <AiFillBackward size={25} />
      </Link>
      <h1 className="font-bold text-4xl text-center">Welcome to Blogs</h1>
      <br />
      <button onClick={aa}>Data</button>
      <div className="flex flex-col space-y-4">
        {posts?.map((post, idx) => {
          return (
            <div key={idx} className="text-lg m-10 text-center">
              {post.description}
            </div>
          );
        })}
      </div>
    </div>
  );
}
