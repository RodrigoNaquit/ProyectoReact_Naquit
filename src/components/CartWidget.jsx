

const CartWidget = () => {
    return (
        <button type="button" className="btn btn-primary position-relative">
        <img src="./imagenes/cart2.svg" alt="Cart" width="50"/>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"/>
        </button>
    )
}

export default CartWidget;