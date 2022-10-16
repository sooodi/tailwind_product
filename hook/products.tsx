import { useQuery } from "react-query";
import { get } from "../service/request";

const fetchProducts = () => get(`/products`);

export default function useProducts() {
  return useQuery("products", fetchProducts);
}
