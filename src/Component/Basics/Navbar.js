import React from 'react';

const Navbar = ({filterItems, menuUpdList}) => {
    return (
        <>
           <nav className = "navbar">
                <div className = "btn-group">
                    {/* category navbar */}
                    {
                        menuUpdList.map((curEle, index) => {
                            return (<button className = "btn-group__item" key = {index} onClick = {() => {filterItems(curEle)}}>{curEle}</button>)
                        })
                    }

                </div>
            </nav> 
        </>
    )
}

export default Navbar;
