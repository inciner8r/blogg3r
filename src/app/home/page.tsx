import BlogCard from "@/components/BlogCard";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const blogPosts = [
  {
    id: 1,
    title: "Introduction to Next.js",
    author: "John Doe",
    content:
      "Next.js is a React framework for building server-side rendered and statically generated web applications.",
  },
  {
    id: 2,
    title: "Getting Started with Tailwind CSS",
    author: "Jane Smith",
    content:
      "Tailwind CSS is a utility-first CSS framework that helps you build modern web designs without having to write custom CSS.",
  },
  {
    id: 3,
    title: "State Management with Redux",
    author: "Alex Johnson",
    content:
      "Redux is a predictable state container for JavaScript apps. It helps you manage application state in a predictable way.",
  },
  {
    id: 3,
    title: "State Management with Redux",
    author: "Alex Johnson",
    content:
      "Redux is a predictable state container for JavaScript apps. It helps you manage application state in a predictable way.",
  },
  {
    id: 3,
    title: "State Management with Redux",
    author: "Alex Johnson",
    content:
      "Redux is a predictable state container for JavaScript apps. It helps you manage application state in a predictable way.",
  },
  {
    id: 3,
    title: "State Management with Redux",
    author: "Alex Johnson",
    content:
      "Redux is a predictable state container for JavaScript apps. It helps you manage application state in a predictable way.",
  },
  {
    id: 3,
    title: "State Management with Redux",
    author: "Alex Johnson",
    content:
      "Redux is a predictable state container for JavaScript apps. It helps you manage application state in a predictable way.",
  },
  {
    id: 3,
    title: "State Management with Redux",
    author: "Alex Johnson",
    content:
      "Redux is a predictable state container for JavaScript apps. It helps you manage application state in a predictable way.",
  },
];

const Home = () => {
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
          <div className="flex gap-8 flex-wrap justify-evenly">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default Home;
