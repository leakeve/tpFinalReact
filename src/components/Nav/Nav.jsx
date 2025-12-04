import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext/useCartContext";
import "./Nav.css";

export const Nav = () => {

    const { getTotalItems }= useCartContext();

    return (
    <nav>
        <ul>
            <li>
                <Link to={"/"}>Inicio</Link>
            </li>
            <li>
                <Link to={"/category/dulce"}>Dulce</Link>
            </li>
            <li>
                <Link to={"/category/salado"}>Salado</Link>
            </li>
            <li className="li-carrito">
                <Link to={"/carrito"} ><img className="img-carrito" src="/images/carrito.png"/>Carrito</Link>
                {getTotalItems() > 0 && (
                    <span className="in-cart">{getTotalItems()}</span>
                )}
            </li>
        </ul>
    </nav>
    );
};