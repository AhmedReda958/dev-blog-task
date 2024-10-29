import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/types";

export default function BlogCard({ article }: Readonly<{ article: Article }>) {
  return (
    <div
      className="max-h-[530px] md:max-h-[580px] flex flex-col justify-between bg-background shadow-card hover:-translate-y-2 transition-all will-change-transform duration-300 ease-in-out p-6 cursor-pointer"
      key={article.id}
    >
      <Image
        src={article.social_image}
        alt={article.title}
        height={240}
        width={336}
      />
      {/* content */}
      <Link href={article.url} className="block flex-1">
        <p className="text-primary text-sm mt-7 font-bold">{article.tags}</p>
        <h2 className="text-2xl font-bold text-body my-3 line-clamp-3 pe-8 relative group">
          {article.title}
          <ArrowUpRight
            size={24}
            className=" absolute top-0 right-0 group-hover:animate-bounce"
          />
        </h2>
        <p className="text-body-light line-clamp-6">{article.description}</p>
      </Link>

      {/* auther */}
      <div className="flex items-center mt-5">
        <Image
          src={article.user.profile_image}
          alt={article.user.name}
          height={40}
          width={40}
          className="rounded-full"
        />
        <div className="ml-3">
          <p className="text-body text-sm font-semibold mb-1">
            {article.user.name}
          </p>
          <p className="text-body-light text-xs">
            {article.readable_publish_date}
          </p>
        </div>
      </div>
    </div>
  );
}
