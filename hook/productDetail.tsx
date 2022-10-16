import { useQuery } from "react-query";
import { get } from "../service/request";

export const fetchProduct = (productId: string | string[] | undefined) =>
  get(`/products/${productId}`);

export default function useProduct(productId: string | string[] | undefined) {
  return useQuery(["product", productId], () => fetchProduct(productId));
}
