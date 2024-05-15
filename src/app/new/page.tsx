import React from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { createWalletClient, custom } from "viem";
import { mainnet } from "viem/chains";

const page = () => {
  return (
    <div>
      <div className="px-24 py-12 flex flex-col justify-center items-center">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle>Create New Blog Post</CardTitle>
            <CardDescription>
              Fill out the form below to publish a new blog post.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="Enter a title for your post" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                className="min-h-[300px]"
                id="content"
                placeholder="Start writing your blog post content here..."
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button>Publish Post</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default page;
