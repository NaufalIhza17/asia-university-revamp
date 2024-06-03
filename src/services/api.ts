import { apiRequest } from "@/utils/api";

export const getUsers = async (params: { page: string; limitTo: string }) => {
  const { page, limitTo } = params;
  return apiRequest({
    auth: false,
    path: `users?page=${page}&recordPerPage=${limitTo}`,
    method: "GET",
  });
};

export const getUser = async (params: { user_id: string }) => {
  const { user_id } = params;
  return apiRequest({
    auth: false,
    path: `users/${user_id}`,
    method: "GET",
  });
};

export const editUser = async (params: {
  user_id: string;
  full_name?: string;
  email?: string;
  avatar?: string;
}) => {
  const { user_id, ...bodyRequest } = params;
  return apiRequest({
    auth: true,
    path: `users/${user_id}`,
    method: "PATCH",
    bodyRequest: bodyRequest,
  });
};

export const deleteUser = async (params: { userid: string }) => {
  const { userid } = params;
  return apiRequest({
    auth: false,
    path: `users/${userid}`,
    method: "DELETE",
  });
};

export const newsRequest = async (bodyRequest: {
  title: string;
  content: string;
  navigateto: string;
}) =>
  apiRequest({
    auth: true,
    path: `news`,
    method: "POST",
    bodyRequest,
    noBearer: true,
  });

export const getNews = async (params: { page: string; limitTo: string }) => {
  const { page, limitTo } = params;
  return apiRequest({
    auth: false,
    path: `news?page=${page}&recordPerPage=${limitTo}`,
    method: "GET",
  });
};

export const getNewsOne = async (params: { news_id: string }) => {
  const { news_id } = params;
  return apiRequest({
    auth: false,
    path: `news/${news_id}`,
    method: "GET",
  });
};

export const editNews = async (params: {
  newsid: string;
  title?: string;
  content?: string;
  navigateTo?: string;
}) => {
  const { newsid, ...bodyRequest } = params;
  return apiRequest({
    auth: true,
    path: `news/${newsid}`,
    method: "PATCH",
    bodyRequest: bodyRequest,
  });
};

export const deleteNews = async (params: { newsid: string }) => {
  const { newsid } = params;
  return apiRequest({
    auth: false,
    path: `news/${newsid}`,
    method: "DELETE",
  });
};
