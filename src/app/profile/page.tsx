"use client";
import React, { useEffect, useState } from "react";
import { FetchAllBlogs, DeleteBlog } from "@/lib/client";
import { BlogPost } from "@/types/types";
import BlogCard from "@/components/BlogCardProfile";
import { useAccount } from "wagmi";

const ProfilePage = () => {
  const account = useAccount();
  const [UserWalletAddress, setUserWalletAddress] = useState<string>("");
  const [userBlogs, setUserBlogs] = useState<readonly BlogPost[]>([]);

  const loadUserBlogs = async () => {
    const blogs = await FetchAllBlogs(window.ethereum);
    setUserBlogs(blogs);
  };

  const handleDelete = async (blogId: bigint) => {
    await DeleteBlog(window.ethereum, blogId);
    setUserBlogs(userBlogs.filter((blog) => blog.id !== BigInt(blogId)));
  };

  useEffect(() => {
    loadUserBlogs();
  }, []);

  return (
    <div className="px-4 py-12 md:px-12 lg:px-24 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center mb-8">
        <img
          src={
            "https://i.pinimg.com/736x/93/c7/49/93c749a472dcc9a17b3471c85ca1261a.jpg"
          }
          alt="Avatar"
          className="w-36 h-36 rounded-full"
        />
        <p className="mt-4">{account.address}</p>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {userBlogs.map((blog) => (
          <div key={blog.id.toString()}>
            <BlogCard blog={blog} DeleteBlog={handleDelete} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
