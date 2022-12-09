import React from "react";
import { useState } from "react";

const ItemCount = ({stock}) => {
    const [counter, setCounter]= useState(1);

    const decrease = () => {
        if (counter > 1){
            setCounter(counter - 1);
        }
    }

    const increase = () => {
        if (counter < stock){
            setCounter(counter + 1);
        }   
    }

    const onAdd = () => {
        if (stock > 0){
            console.log("Agregaste: " + counter + "Productos al Carrito!");
    
        }
    }



    return (
        <div>
            <div className="row mb-3">
                <div className="col-md-4 text-center">
                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" class="btn btn-outline-primary" onClick={decrease}>-</button>
                        <button type="button" class="btn btn-outline-primary">{counter}</button>
                        <button type="button" class="btn btn-outline-primary" onClick={increase}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 text-center"></div>
                <button type="button" class="btn btn-outline-primary" onClick={onAdd}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;