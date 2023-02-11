import { useEffect, useState } from "react";
import axios from "axios";
const useProduct = (id) => {
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://kzico.runflare.run/product/${id}`
      );
      setProduct(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return product;
};

export default useProduct;
