import React from 'react';
import { useEffect, useState } from 'react';
import arrayProductos from "./json/productos.json";
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';



const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {itemId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(item);
            }, 250);
        });

        getData.then(res =>setItem(arrayProductos.find(item => item.id === parseInt(itemId))));
    }, [])


    return (
        <div className="container">
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;