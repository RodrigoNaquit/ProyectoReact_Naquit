import React from "react";
import arrayProductos from "./json/productos.json";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
    const [items, setItems]= useState([]);

    useEffect(() =>{
        const promesa = new Promise ((resolve, reject) =>{
            setTimeout(() =>{
                resolve(arrayProductos);
            }, 2000);
        });

        promesa.then((data) =>{
            setItems(data);
        })
             
    });




    return (
        <div className="Container">
            <ItemList items={items} />
            <ItemCount stock={2} />
        </div>
    )
}

export default ItemListContainer;