import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const ProductCard = () => {
  const { isLoading, data } = useQuery("products", () => {
    return axios.get("https://fakestoreapi.com/products");
  });
  // below are the product details just add product card here and pass props
  console.log(data);
  return <div>ProductCard</div>;
};
export default ProductCard;
