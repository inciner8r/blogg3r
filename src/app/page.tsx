"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { FetchAllBlogs } from "@/lib/client";
import { BlogPost } from "@/types/types";

export default function Home() {
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

  const router = useRouter();

  const formatAddress = (address: string) => {
    if (address.length > 10) {
      return `${address.slice(0, 6)}...${address.slice(-4)}`;
    }
    return address;
  };

  return (
    <main className="px-4 md:px-8 lg:px-24 flex flex-col">
      <div className="flex flex-col w-full py-12 md:py-24 h-screen">
        <div className="text-4xl md:text-7xl mb-8 md:mb-12 leading-tight">
          Write <br />
          Read. Connect.
        </div>
        <div className="text-xl md:text-3xl leading-snug mb-8">
          Join the thriving community <br />
          of bloggers and discover diverse perspectives..
        </div>
        <div className="flex gap-4 mb-24 md:mb-48">
          <Button variant="outline" onClick={() => router.push(`/home`)}>
            Blogs
          </Button>
          <Button onClick={() => router.push(`/new`)}>Write</Button>
        </div>
      </div>
      <div className="w-full flex flex-col items-center h-screen gap-12 md:gap-24">
        <div className="text-3xl md:text-5xl font-semibold">Trending</div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-full md:max-w-4xl"
        >
          <CarouselContent>
            {BlogPosts.map((blog, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="aspect-square flex flex-col">
                    <CardTitle
                      className="p-6 line-clamp-1 hover:cursor-pointer hover:underline "
                      onClick={() => router.push(`/blog/${blog.id}`)}
                    >
                      {blog.title}
                    </CardTitle>
                    <CardContent className="flex p-6 line-clamp-6 flex-grow">
                      <div className="">{blog.content}</div>
                    </CardContent>
                    <CardContent className="flex p-6 mt-auto">
                      <div className="">{formatAddress(blog.author)}</div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </main>
  );
}
