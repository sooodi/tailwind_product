import axios from "axios";

export const request = axios.create({
  baseURL: "https://fakestoreapi.com",
  withCredentials: false,
  timeout: 80000,
  headers: {
    "content-type": "application/json",
  },
});

export async function get<T>(url: string) {
  const response = await request.get<T>(url);
  return response.data;
}
