import { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const { data } = await axios.get(url);
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error.response.data);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
