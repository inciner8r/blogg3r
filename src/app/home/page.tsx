"use client";
import BlogCard from "@/components/BlogCard";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FetchAllBlogs, publicClient } from "@/lib/client";
import { getContract } from "viem";
import { abi } from "@/abi/abi";
import { BlogPost } from "@/types/types";

const Home = () => {
  const [BlogPosts, setBlogPosts] = useState<readonly BlogPost[]>([]);
  const loadBlogs = async () => {
    if (typeof window !== "undefined") {
      const result = await FetchAllBlogs(window.ethereum);
      setBlogPosts(result);
    }
  };
  useEffect(() => {
    loadBlogs();
  }, []);

  return (
    <div className="px-24 py-12 flex flex-col justify-center items-center">
      <Tabs
        defaultValue="blogs"
        className="flex flex-col justify-center items-center w-full"
      >
        <TabsList className="w-full flex justify-evenly mb-8">
          <TabsTrigger value="blogs" className="flex-1">
            Blogs
          </TabsTrigger>
          <TabsTrigger value="password" className="flex-1">
            Password
          </TabsTrigger>
        </TabsList>
        <TabsContent value="blogs">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BlogPosts.map((post) => (
              <BlogCard key={post.id.toString()} blog={post} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default Home;
