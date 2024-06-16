import { apiRequest } from "@/utils/api";

export const getUsers = async (params: { page: string; limitTo: string }) => {
  const { page, limitTo } = params;
  return apiRequest({
    auth: false,
    path: `users?page=${page}&recordPerPage=${limitTo}`,
    method: "GET",
  });
};

export const getUser = async (params: { id: string }) => {
  const { id } = params;
  return apiRequest({
    auth: false,
    path: `users/${id}`,
    method: "GET",
  });
};

export const editUser = async (params: {
  id: string;
  full_name?: string;
  email?: string;
  avatar?: string;
  user_id?: string;
}) => {
  const { id, ...bodyRequest } = params;
  return apiRequest({
    auth: true,
    path: `users/${id}`,
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

export const getCourses = async () => {
  return apiRequest({
    auth: false,
    path: `course`,
    method: "GET",
  });
};

export const getTranscript = async (params: { user_id?: string }) => {
  const { user_id } = params;
  return apiRequest({
    auth: false,
    path: `transcript/${user_id}`,
    method: "GET",
  });
};

export const addTranscript = async (params: {
  user_id?: string;
  course_id?: string;
  taken_in?: string;
}) => {
  const { user_id, course_id, ...bodyRequest } = params;
  return apiRequest({
    auth: false,
    path: `transcript/${user_id}/${course_id}`,
    method: "POST",
    bodyRequest: bodyRequest,
  });
};

export const deleteTranscript = async (params: { transcript_id?: string }) => {
  const { transcript_id } = params;
  return apiRequest({
    auth: false,
    path: `transcript/${transcript_id}`,
    method: "DELETE",
  });
};

export const getApprovedTranscript = async (params: { user_id?: string }) => {
  const { user_id } = params;
  return apiRequest({
    auth: false,
    path: `transcript/approved/${user_id}`,
    method: "GET",
  });
};

export const getNotApprovedTranscript = async (params: {
  user_id?: string;
}) => {
  const { user_id } = params;
  return apiRequest({
    auth: false,
    path: `transcript/notapproved/${user_id}`,
    method: "GET",
  });
};

export const updateApprovalTranscript = async (params: {
  transcript_ids?: string[];
}) => {
  const { transcript_ids } = params;
  return apiRequest({
    auth: false,
    path: `transcript/approve`,
    method: "POST",
    bodyRequest: { transcript_ids: transcript_ids },
  });
};

export const addCourse = async (params: {
  academic_year?: string;
  degree?: string;
  department?: string;
  semester?: string;
  english?: boolean;
  name?: string;
  class_code?: string;
  instructor?: string;
  course_code?: string;
}) => {
  const { ...bodyRequest } = params;
  return apiRequest({
    auth: true,
    path: `course`,
    method: "POST",
    bodyRequest: bodyRequest,
    noBearer: true,
  });
};

export const deleteCourse = async (params: { courseid: string }) => {
  const { courseid } = params;
  return apiRequest({
    auth: false,
    path: `course/${courseid}`,
    method: "DELETE",
  });
};

export const getCourse = async (params: { course_id: string }) => {
  const { course_id } = params;
  return apiRequest({
    auth: false,
    path: `course/${course_id}`,
    method: "GET",
  });
};

export const editCourse = async (params: {
  course_id: string;
  academic_year?: string;
  degree?: string;
  department?: string;
  semester?: string;
  english?: boolean;
  name?: string;
  class_code?: string;
  instructor?: string;
  course_code?: string;
}) => {
  const { course_id, ...bodyRequest } = params;
  return apiRequest({
    auth: true,
    path: `course/${course_id}`,
    method: "PATCH",
    bodyRequest: bodyRequest,
  });
};

export const addPayment = async (params: {
  user_id: string;
  primary_tuition: number;
  additional_tuition: number;
  scholarship: number;
}) => {
  const { user_id, primary_tuition, additional_tuition, scholarship } = params;
  const bodyRequest = {
    primary_tuition: primary_tuition,
    additional_tuition: additional_tuition,
    scholarship: scholarship,
    status: "not paid",
  };
  return apiRequest({
    auth: true,
    path: `payment/${user_id}`,
    method: "POST",
    bodyRequest: bodyRequest,
    noBearer: true,
  });
};

export const getPayments = async () => {
  return apiRequest({
    auth: false,
    path: `payment`,
    method: "GET",
  });
};

export const getPayment = async (params: { user_id: string }) => {
  const { user_id } = params;
  return apiRequest({
    auth: false,
    path: `payment/${user_id}`,
    method: "GET",
  });
};

export const deletePayment = async (params: { paymentid: string }) => {
  const { paymentid } = params;
  return apiRequest({
    auth: false,
    path: `payment/${paymentid}`,
    method: "DELETE",
  });
};

export const updatePayment = async (params: {
  paymentid: string;
  status: string;
}) => {
  const { paymentid, ...bodyRequest } = params;
  return apiRequest({
    auth: true,
    path: `payment/${paymentid}`,
    method: "PATCH",
    bodyRequest: bodyRequest,
  });
};
