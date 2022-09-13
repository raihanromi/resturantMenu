import React, { useState } from 'react'
import "./style.css"
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const Resturant = () => {
    const [menuData,setMenuData]=useState(Menu);
    

    const uniqueList= [
      ...new Set(Menu.map((curElem)=>{
      return curElem.category
    })
    ),"All" 
  ]
    const [menuList, setMenuList] = useState(uniqueList);
    const filterItem = (category) => {
      if (category=="All"){
        return setMenuData(Menu)
      }
      const updatedList = Menu.filter((curElem) => {
        return curElem.category == category;
      });
      setMenuData(updatedList);
    };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
}

export default Resturant
