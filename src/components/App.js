import React,{useState} from "react";
import Menu from "./Menu";
import Menudisplay from "./Menudisplay";
import "../styles/App.css"
function App(){
    let [catagory,setCatogory] = useState("all");
    return (
        <div>
            <Menu setCatogory={setCatogory}/>
            <Menudisplay catagory={catagory}/>
        </div>
    )
}
export default App;

