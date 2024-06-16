"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableNews from "@/components/Tables/TableNews";
import { useState, useEffect, SyntheticEvent } from "react";
import { getNews, newsRequest, deleteNews, getCourses } from "@/services/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NewsData } from "@/interface/page";

export default function News() {
  const [newsData, setNewsData] = useState<NewsData[]>([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await getNews({ page: "1", limitTo: "50" });
      setNewsData(response.data);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    navigateto: "",
  });

  const onClickNews = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await newsRequest(formData);
      if (res?.data) {
        toast.success("News created successfully!");
        setFormData({
          title: "",
          content: "",
          navigateto: "",
        });
        fetchNews();
      }
      setIsLoading(false);
    } catch (err: any) {
      setIsLoading(false);
      if (err.response?.data?.message) {
        toast.error(`News creation failed: ${err.response.data.message}`);
        console.log("News creation Error: ", err.response.data.message);
      } else {
        toast.error("News creation failed: An unknown error occurred");
        console.log("News creation Error: Unknown error", err);
      }
    }
  };

  const onClickDelNews = async (newsid: string) => {
    try {
      const res = await deleteNews({ newsid });
      if (res.status === 200) {
        toast.success("News deleted successfully");
        fetchNews();
      }
    } catch (err: any) {
      if (err.response?.data?.message) {
        toast.error(`News delete failed: ${err.response.data.message}`);
        console.log("News delete Error: ", err.response.data.message);
      } else {
        toast.error("News delete failed: An unknown error occurred");
        console.log("News delete Error: Unknown error", err);
      }
    }
  };

  return (
    <DefaultLayout>
      <ToastContainer position="top-right" autoClose={5000} />
      <div className="w-full py-3 border-b mb-5">
        <h1 className="text-2xl font-bold">Add News</h1>
      </div>
      <form action="" method="post" className="flex flex-col gap-3">
        <div className="flex w-full items-center">
          <label htmlFor="" className="text-lg min-w-31">
            Title <span className="text-rose-600">*</span>
          </label>
          <input
            id="title"
            name="title"
            required
            placeholder="Insert title..."
            type="text"
            className="bg-gray w-full p-2 rounded"
            value={formData.title}
            onChange={(e) =>
              setFormData({
                ...formData,
                title: e.target.value,
              })
            }
          />
        </div>
        <div className="flex w-full items-center">
          <label htmlFor="" className="text-lg min-w-31">
            Content <span className="text-rose-600">*</span>
          </label>
          <input
            id="content"
            name="content"
            required
            placeholder="Insert content..."
            type="text"
            className="bg-gray w-full p-2 rounded"
            value={formData.content}
            onChange={(e) =>
              setFormData({
                ...formData,
                content: e.target.value,
              })
            }
          />
        </div>
        <div className="flex w-full items-center">
          <label htmlFor="" className="text-lg min-w-31">
            Url
          </label>
          <input
            id="url"
            name="url"
            placeholder="Insert url..."
            type="text"
            className="bg-gray w-full p-2 rounded"
            value={formData.navigateto}
            onChange={(e) =>
              setFormData({
                ...formData,
                navigateto: e.target.value,
              })
            }
          />
        </div>
        <button
          type="submit"
          className="p-2 w-full bg-blue-500 rounded mt-3 flex justify-center"
          onClick={onClickNews}
          disabled={isLoading}
        >
          {!isLoading ? (
            <p className="font-bold text-white">Add News</p>
          ) : (
            <div className="border-gray-300 h-6 w-6 animate-spin rounded-full border-2 border-t-emerald-800" />
          )}
        </button>
      </form>
      <div className="w-full py-3 border-b my-5">
        <h1 className="text-2xl font-bold">List of News</h1>
      </div>
      <TableNews newsData={newsData} onClickDelNews={onClickDelNews} />
    </DefaultLayout>
  );
}
