import React from "react";
import MyTheme from "./MyTheme";
import MyShoppinglist from "./MyShoppinglist";
import MyContect from "./MyContect";
import MyLogout from "./MyLogout";
import MyQuit from "./MyQuit";
import EditMyInfo from "./EditMyInfo";

const MyDetailMain = ({ selectedBlock }) => {
  switch (selectedBlock) {
    case "EditMyInfo":
      return <EditMyInfo />;
    case "MyTheme":
      return <MyTheme />;
    case "MyShoppinglist":
      return <MyShoppinglist />;
    case "MyContect":
      return <MyContect />;
    case "MyLogout":
      return <MyLogout />;
    case "MyQuit":
      return <MyQuit />;
    default:
      return null;
  }
};

export default MyDetailMain;
