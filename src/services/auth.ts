import { apiRequest } from "@/utils/api";

export const loginRequest = async (bodyRequest: {
  email: string;
  password: string;
}) =>
  apiRequest({
    auth: false,
    path: `users/login`,
    method: "POST",
    bodyRequest,
  });

export const signupRequest = async (bodyRequest: {
  full_name: string;
  email: string;
  password: string;
}) =>
  apiRequest({
    auth: true,
    path: `users/signup`,
    method: "POST",
    bodyRequest,
  });
