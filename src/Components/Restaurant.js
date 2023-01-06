import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

// as we dont want to keep repeating all buttons category to be called so to in order to not to dothat will get first uniq list of all category we will just set uniq func
//will pass
// using new set in orderto avoid reptation of category names
const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      // in order toget list of all cat will pas curentele which has category
      return curElem.category;
    })
  ),
  "All",
];
console.log(uniqueList); // this will have all cate names

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu); // we paseed our menu to menudata which is our current data
  //console.log(menuData);
  const [menuList, setMenuList] = useState(uniqueList); // this will have all uniq list
  const filterItem = (category) => {
    if (category === "All") {
      // in order to get all menu catgor
      return setMenuData(Menu);
    }
    const updatedList = Menu.filter((curElem) => {
      //the mateched category will be checked and flterd out and stored to updatedlist
      // passing curent elemnt and if that maches category then it should be returend
      return curElem.category === category;
    }); //after that updated list will be set to setmenudata
    setMenuData(updatedList);
  };
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />

      {/* passing data in the form of props to menucard compo to dispaly all cards info  so its like passing data from one compo to other like parent to child*/}
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
