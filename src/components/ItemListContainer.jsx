import React from "react";

const ItemListContainer = (props) => {
    return (
        <div className="Container">
            <div className="row">
                <div className="cold-md-12">
                    <div className="alert alert-warning text-center">
                        <p>
                            {props.greeting}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;