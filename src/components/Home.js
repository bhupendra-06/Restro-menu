import React, { useEffect } from "react";
import Menu from "./Menu";
import Menu1 from "./Menu1";
import Menu2 from "./Menu2";
import Menu3 from "./Menu3";
import Menu4 from "./Menu4";
import Menu5 from "./Menu5";
import Menu6 from "./Menu6";
import RestaurantMenu from "./RestaurantMenu";
import RestaurantMenu1 from "./RestaurantMenu1";
import RestaurantMenu2 from "./RestaurantMenu2";
import RestaurantMenu3 from "./RestaurantMenu3";
import RestaurantMenu4 from "./RestaurantMenu4";
import Test from "./Test";
import EditableMenu from "./EditableMenu/EditableMenu";

const Home = () => {
  useEffect(() => {
    fetch("https://hotel-menu-backend.vercel.app/api/v1/hotel1/get-menu-items")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Menu Items:", data); // Prints data in console
      })
      .catch((error) => {
        console.error("Error fetching menu items:", error);
      });
  }, []);
  return (
    <div className="mx-auto sm:flex gap-2 flex-wrap justify-center bg-red-400 h-full">
      {/* <Test /> */}
      {/* <Menu />
      <Menu1 />
      <Menu2 />
      <Menu3 />
      <Menu4 />
      <Menu5 />
      <Menu6 />
      <RestaurantMenu3 />
      <RestaurantMenu2 />
      <RestaurantMenu1 />
      <RestaurantMenu />
      <RestaurantMenu4 />  */}
    </div>
  );
};

export default Home;
