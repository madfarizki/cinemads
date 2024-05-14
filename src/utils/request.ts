import axios from "axios";

export type BaseResponse<T> = {
  data: T;
};

export type Response<T, K = unknown> = K extends object ? BaseResponse<T> & K : BaseResponse<T>;

type Request = {
  url: string;
  httpMethod?: "GET" | "POST" | "PATCH" | "DELETE" | "PUT";
  data?: object;
  params?: object;
};

function request<Meta = unknown>({
  url,
  httpMethod = "GET",
  data = {},
  params = {},
}: Request): Promise<Response<Meta>> {
  const token = import.meta.env.VITE_APP_TMDB_TOKEN;

  return axios
    .request({
      method: httpMethod,
      url,
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
      data,
      params,
    })
    .then((res) => res)
    .catch((err) => {
      throw err;
    });
}

export default request;
