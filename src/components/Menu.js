import React,{useState} from "react";
function Menu({setCatogory}){  
   
    return (
        <div className="menu-bar">
            <h1>Our Menu</h1>
            <div className="menu-heading">
                <p onClick={()=>setCatogory("all")}>All</p>
                <p id="filter-btn-1" onClick={()=>setCatogory("breakfast")}>Breakfast</p>
                <p id="filter-btn-2" onClick={()=>setCatogory("lunch")}>Lunch</p>
                <p id="filter-btn-3" onClick={()=>setCatogory("shakes")}>Shakes</p>
            </div>
           
            
        </div>
    )
}
export default Menu;