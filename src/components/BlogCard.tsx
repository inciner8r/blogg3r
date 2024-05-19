// components/BlogCard.tsx
import { FC } from "react";
import { BlogPost } from "@/types/types";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import parse from "html-react-parser";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  return (
    <Card className="w-full dark:bg-gray-800 dark:text-gray-50">
      <CardHeader>
        <CardTitle
          className="mb-2 line-clamp-1 hover:cursor-pointer hover:underline"
          onClick={() => router.push(`/blog/${blog.id}`)}
        >
          {blog.title}
        </CardTitle>
        <div className="flex items-center justify-between space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-1">
            <img
              alt="Author Avatar"
              className="rounded-full"
              height={24}
              src="https://i.pinimg.com/736x/93/c7/49/93c749a472dcc9a17b3471c85ca1261a.jpg"
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
        <p className="text-sm leading-relaxed line-clamp-[7]">
          {parse(blog.content)}
        </p>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
