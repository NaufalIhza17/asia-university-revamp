"use client";

import { useState, useEffect } from "react";
import { NewsData } from "@/interface/page";
import { usePathname } from "next/navigation";
import { getNewsOne } from "@/services/api";
import Image from "next/image";
import NewsImg1 from "~/public/images/news-1-image.png";
import NewsImg2 from "~/public/images/news-2-image.jpg";
import NewsImg3 from "~/public/images/news-3-image.jpg";
import NewsImg4 from "~/public/images/news-4-image.jpg";
import NewsImg5 from "~/public/images/news-5-image.jpg";
import NewsImg6 from "~/public/images/news-6-image.jpg";
import NewsImg7 from "~/public/images/news-7-image.jpg";
import NewsImg8 from "~/public/images/news-8-image.jpg";
import NewsImg9 from "~/public/images/news-9-image.jpg";
import NewsImg10 from "~/public/images/news-10-image.jpg";

export default function NewsToUser() {
  const [newsData, setNewsData] = useState<NewsData>();
  const pathname = usePathname();
  const lastPathName = pathname.split("/");
  const imageFromPath = lastPathName[lastPathName.length - 1];

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await getNewsOne({
        news_id: lastPathName[lastPathName.length - 2],
      });
      setNewsData(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <section className="max-w-[1440px] mx-auto py-20">
      <div className="flex justify-left items-left py-5">
        <h2 className="text-[#2D937C] text-5xl font-bold text-center w-full">
          {newsData?.title}
        </h2>
      </div>
      <div className="flex gap-10 mt-5">
        <div className="min-w-fit">
          {imageFromPath === "1" && (
            <Image src={NewsImg1} alt="" width={700} height={475} />
          )}
          {imageFromPath === "2" && (
            <Image src={NewsImg2} alt="" width={700} height={475} />
          )}
          {imageFromPath === "3" && (
            <Image src={NewsImg3} alt="" width={700} height={475} />
          )}
          {imageFromPath === "4" && (
            <Image src={NewsImg4} alt="" width={700} height={475} />
          )}
          {imageFromPath === "5" && (
            <Image src={NewsImg5} alt="" width={700} height={475} />
          )}
          {imageFromPath === "6" && (
            <Image src={NewsImg6} alt="" width={700} height={475} />
          )}
          {imageFromPath === "7" && (
            <Image src={NewsImg7} alt="" width={700} height={475} />
          )}
          {imageFromPath === "8" && (
            <Image src={NewsImg8} alt="" width={700} height={475} />
          )}
          {imageFromPath === "9" && (
            <Image src={NewsImg9} alt="" width={700} height={475} />
          )}
          {imageFromPath === "10" && (
            <Image src={NewsImg10} alt="" width={700} height={475} />
          )}
        </div>
        <div className="text-justify text-lg">{newsData?.content}</div>
      </div>
    </section>
  );
}
