
import React, { useState } from "react";
import './../styles/App.css';
import Categories from "./Categories";
import Menu from "./Menu";
import Items from "./Items";

const allCategories = ['all', ...new Set(Items.map((item) => item.category))];
const App = () => {
  const [menuItems,setMenuItems] = useState(Items);
  const[categories,setCategories] = useState(allCategories);

  const filterItems = (category)=>{
    if(category==='all'){
        setMenuItems(Items);
        return ;
    }
    let items = Items.filter(item => item.category===category);
    setMenuItems(items);
}
  return (
    <div className="menuSection" id="main">
      <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </div>
  )
}

export default App

