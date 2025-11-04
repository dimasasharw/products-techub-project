import axios from "axios";

export type ProductParams = {
  limit?: number;
  skip?: number;
  category?: string;
  brand?: string;
};

export const fetchProducts = async (params?: ProductParams) => {
  const res = await axios.get("https://dummyjson.com/products", {
    params: {
      limit: params?.limit ?? 12,
      skip: params?.skip ?? 0,
      category: params?.category,
      brand: params?.brand,
    },
  });
  return res.data;
};

export const fetchProductDetail = async (id?: number) => {
  const res = await axios.get(`https://dummyjson.com/products/${id}`);
  return res.data;
};
