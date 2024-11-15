import React, { useState, useEffect } from "react";
import apiCall from "../../api/Api";
import Cookies from "js-cookie";

const sample = () => {
  const [itemData, setItemData] = useState([]);
  const token = Cookies.get("access_token");
  useEffect(() => {
    console.log(token);
    const fetchData = async () => {
      try {
        const response = await apiCall(
          "/users/order_detail",
          "GET",
          null,
          token
        );
        console.log(response.data.item);
        setItemData(response.data.item);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return <div></div>;
};

export default sample;
