import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

const BASE_URL = "http://localhost:8000";

interface apiRequestProp {
  url?: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers?: any;
  bodyRequest?: any;
  params?: any;
  path: string;
  timeout?: number;
  auth: boolean;
}

export const apiRequest = async (props: apiRequestProp) => {
  const {
    url,
    method,
    timeout,
    headers,
    bodyRequest,
    params,
    path,
    auth = true,
  } = props;

  const baseUrl = url ? `${url}/` : `${BASE_URL}/`;
  let token = Cookies.get("ACCESS_TOKEN");

  if (!token) {
    // ? fetch visitor token if token doesnt exist */
    // token = await visitorTokenRequest();
  }

  const config: AxiosRequestConfig = {
    method,
    url: baseUrl + path,
    headers: {
      // 'Content-Type' : 'application/json',
      Authorization: token && auth ? `Bearer ${token}` : "",
    },
  };

  if (headers) config.headers = { ...config.headers, ...headers };
  if (bodyRequest) config.data = bodyRequest;
  if (params) config.params = params;
  if (timeout) config.timeout = timeout;

  return axios(config)
    .then((res) => res)
    .catch((err) => {
      console.info("[ERROR] Api Request: ", err);
      throw err;
    });
};
