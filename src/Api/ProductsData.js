// api.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://nsarcus.triverseadvertising.com/jsonData/preimixx.json";

const ProductData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
  console.log("api is loading",loading)
  console.log("api have an error",loading)
  console.log("api data",data)
};

export default ProductData;
