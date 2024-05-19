"use client";
import React, { useEffect, useState } from "react";
import { FetchBlog } from "@/lib/client";
import { BlogPost } from "@/types/types";
import parse from "html-react-parser";

const BlogDetailPage = ({ params }: { params: { id: string } }) => {
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const loadBlog = async (blogId: string) => {
    const fetchedBlog = await FetchBlog(window.ethereum, BigInt(blogId));
    setBlog(fetchedBlog);
  };

  useEffect(() => {
    if (params.id) {
      loadBlog(params.id);
    }
  }, [params.id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-24 py-12">
      <div className="max-w-7xl mx-auto bg-white dark:bg-transparent p-6 rounded-lg shadow-md py-12 px-12 border border-slate-600 ">
        <h1 className="text-4xl font-bold mb-6 leading-snug">{blog.title}</h1>
        <div className="flex items-center space-x-2 mb-6 text-sm text-gray-500 dark:text-gray-400">
          <img
            alt="Author Avatar"
            className="rounded-full"
            height={24}
            src="/placeholder.svg"
            style={{ aspectRatio: "24/24", objectFit: "cover" }}
            width={24}
          />
          <span>{blog.author}</span>
          <span>•</span>
          <span>May 9, 2024</span>
        </div>
        <div className="text-sm leading-relaxed">{parse(blog.content)}</div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
