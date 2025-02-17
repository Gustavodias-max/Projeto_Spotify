import React from "react";
import SingleItem from './SingleItem'
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idpath }) => {

    const { pathname } = useLocation();
    const isHome = pathname === "/";
    const finalItems = isHome ? items : Infinity;

    
    return (

        <div className="item-list">
            <div className="item-list__header">
                <h2>{title} Populares</h2>

                {isHome ? <Link className="item_list__link" to={path}>Mostrar tudo</Link> : <></>}

            </div>

            <div className="item-list__container">
                {itemsArray.filter((currentValue, index) => index < finalItems)
                    .map((currObj, index) =>
                        (<SingleItem {...currObj} idpath={idpath} key={`${title}-${index}`} />))}

            </div>
        </div>

    );
};

export default ItemList;