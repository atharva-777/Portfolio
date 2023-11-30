import { AiFillBackward } from "react-icons/ai";
import { client } from "../lib/sanity";
import Link from "next/link";
import { blog } from "../lib/interface";
async function getData() {
  const query = `*[_type=='blog']`;
  const data = await client.fetch(query);
  return data;
}

export default async function Blog() {
  // const [posts, setPosts] = useState<blog[]>();
  // const aa = async () => {
  //   console.log("request intiated");
  //   const x = await fetch(`/api`);
  //   const data = (await x.json()) as blog[];
  //   setPosts(data);
  //   return data;
  // };
  // useEffect(() => {
  //   const data = aa();
  //   console.log(`data -> `, data);
  // }, [posts]);

  const posts = await getData() as blog[];

  return (
    <div className="mx-auto mt-36 mx-w-3xl px-4 sm:px-6 md:max-w-5xl">
      {/* <Link href="/">
        <AiFillBackward />
      </Link> */}
      <h1 className="font-bold text-4xl text-center">
        Atharva&#39;s Blog: Insights, Experiences, and Discoveries
      </h1>
      <br />

      <br />
      <ul>
        {posts.map((post) => (
          <li key={post._id} className="py-4">
            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <div>
                <p className="text-base font-medium leading-6 text-teal-500">
                  {new Date(post._createdAt).toISOString().split("T")[0]}
                </p>
              </div>

              <Link
                href={`/blog/${post.slug.current}`}
                prefetch
                className="space-y-3 xl:col-span-3"
              >
                <div>
                  <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                    {post.title}
                  </h3>
                </div>

                <p className="prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-2">
                  {post.description}
                </p>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
