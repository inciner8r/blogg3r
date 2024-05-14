import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";

const BlogCard = () => {
  return (
    <Card className="w-full max-w-md dark:bg-gray-800 dark:text-gray-50">
      <CardHeader>
        <CardTitle className="mb-2">The Future of Web Development</CardTitle>
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
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
            <span>John Doe</span>
          </div>
          <span>•</span>
          <span>May 9, 2024</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed">
          In this blog post, we explore the exciting advancements in web
          development and how they are shaping the future of the digital
          landscape. From the rise of AI-powered tools to the increasing focus
          on accessibility and sustainability, the web is evolving at a rapid
          pace.
        </p>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
