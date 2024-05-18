// components/BlogCard.tsx
import { FC } from "react";
import { BlogPost } from "@/types/types";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";

interface BlogCardProps {
  blog: BlogPost;
}
const formatAddress = (address: string) => {
  if (address.length > 10) {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }
  return address;
};

const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  return (
    <Card className="w-full dark:bg-gray-800 dark:text-gray-50">
      <CardHeader>
        <CardTitle className="mb-2 line-clamp-1">{blog.title}</CardTitle>
        <div className="flex items-center justify-between space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-1">
            <img
              alt="Author Avatar"
              className="rounded-full"
              height={24}
              src="/placeholder.svg"
              style={{
                aspectRatio: "24/24",
                objectFit: "cover",
              }}
              width={24}
            />
            <span className="truncate">{formatAddress(blog.author)}</span>
          </div>
          <div className="">
            <span>• </span>
            <span>May 9, 2024</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed line-clamp-[7]">{blog.content}</p>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
