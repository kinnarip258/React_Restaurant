import React , {useState}from 'react';
import "./style.css";
import MenuCard from './MenuCard';
import MenuApp from './MenuApp';
import Navbar from "./Navbar";

//for category Array
const uniqueList = [...new Set(MenuApp.map((curEle) => {
    return curEle.category;})), "all"];
const Resturant = () => {

    const [menuData, setMenuData] = useState(MenuApp);
    const [menuUpdList, setMenuUpdList] = useState(uniqueList);

    // show category items
    const filterItems = (category) => {

        if(category == "all") {
            setMenuData(MenuApp);
            return;
        }
        else {
            const updItems = MenuApp.filter((curEle) => {
                return curEle.category == category;
            });
     
            setMenuData(updItems);
        }  
    };

    return (
        <>

            <Navbar filterItems = {filterItems} menuUpdList = {menuUpdList}/>
            <MenuCard menuData ={menuData} />
        </>
    )
}

export default Resturant;
