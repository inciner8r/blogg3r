"use client";

import React, { useState } from "react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { NewBlog, publicClient, WalletClientCreate } from "@/lib/client";
import Editor from "@/components/Editor";

const Page = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  function handleContentChange(content: string) {
    setContent(content);
  }
  return (
    <div className="px-24 py-12 flex flex-col justify-center items-center">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Create New Blog Post</CardTitle>
          <CardDescription>
            Fill out the form below to publish a new blog post.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Enter a title for your post"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Editor
              content={""}
              onContentChange={(newContent: string) => {
                handleContentChange(newContent);
              }}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button
            onClick={() => {
              NewBlog(window.ethereum, title, content);
            }}
          >
            Publish Post
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
