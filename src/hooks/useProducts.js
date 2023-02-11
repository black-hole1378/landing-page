import { useState, useEffect } from "react";

import axios from "axios";
const useProduct = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("http://kzico.runflare.run/product/");
      setProducts(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return products;
};

export default useProduct;
