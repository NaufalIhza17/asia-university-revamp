"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useState, useEffect, FormEvent } from "react";
import { getNewsOne, editNews } from "@/services/api";
import { usePathname } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NewsData } from "@/interface/page";
import { truncateText } from "@/hooks/truncateText";

export default function NewsOne() {
  const [newsData, setNewsData] = useState<NewsData>();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [navigateTo, setNavigateTo] = useState<string>("");
  const pathname = usePathname();
  const lastPathName = pathname.split("/");

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await getNewsOne({
        news_id: lastPathName[lastPathName.length - 1],
      });
      setNewsData(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const updateNewsDetails = async (event: FormEvent) => {
    event.preventDefault();
    const newsId = lastPathName[lastPathName.length - 1];
    const updatedUserData = {
      title: title ? title : newsData?.title,
      content: content ? content : newsData?.content,
      navigateTo: navigateTo ? navigateTo : newsData?.navigateTo,
    };

    try {
      const response = await editNews({ newsid: newsId, ...updatedUserData });
      toast.success("News updated successfully");
      console.log("News updated successfully:", response.data);
      setTimeout(() => {
        fetchNews();
        setTitle("");
        setContent("");
        setNavigateTo("");
      }, 3000);
    } catch (error) {
      toast.error("Error updating news, try again");
      console.error("Error updating news:", error);
    }
  };

  return (
    <DefaultLayout>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="text-black">
        <div className="flex flex-col py-10">
          <div className="w-full py-3 border-b">
            <h1 className="text-2xl font-bold">Edit</h1>
          </div>
          <form
            method="post"
            className="flex flex-col py-5 gap-3"
            onSubmit={updateNewsDetails}
          >
            <div className="flex items-center gap-4">
              <label
                htmlFor="title"
                className="text-lg min-w-[150px] md:min-w-[200px]"
              >
                Change Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-gray w-full p-2 rounded"
                placeholder={`Current Title: ${newsData?.title}`}
              />
            </div>
            <div className="flex items-center gap-4">
              <label
                htmlFor="email"
                className="text-lg min-w-[150px] md:min-w-[200px]"
              >
                Change Content
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="bg-gray w-full p-2 rounded min-h-20"
                placeholder={`Current Content: ${truncateText(newsData?.content!, 500)}`}
              />
            </div>
            <div className="flex items-center gap-4">
              <label
                htmlFor="email"
                className="text-lg min-w-[150px] md:min-w-[200px]"
              >
                Change URL
              </label>
              <input
                type="text"
                id="navigateTo"
                value={navigateTo}
                onChange={(e) => setNavigateTo(e.target.value)}
                className="bg-gray w-full p-2 rounded"
                placeholder={`Current URL: ${newsData?.navigateTo ? newsData.navigateTo : "None"}`}
              />
            </div>
            <button
              type="submit"
              className="mt-4 p-2 bg-blue-500 text-white rounded italic hover:shadow-5 hover:bg-blue-600 transition-all"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
}
