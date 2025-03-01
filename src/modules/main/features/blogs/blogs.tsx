import { getLatestBlog } from "../../data/get-latest-blog";
import BlogInfos from "./blog-infos";

export default async function Blogs() {
  const blogs = await getLatestBlog();
  if (typeof blogs === "string")
    return <div className=" text-red-500">{blogs}</div>;
  return (
    <div className=" flex flex-col lg:flex-row gap-4 lg:gap-8">
      <h2>Latest from the blog: </h2>
      <BlogInfos blog={blogs} />
    </div>
  );
}
