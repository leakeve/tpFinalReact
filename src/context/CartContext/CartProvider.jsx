import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([]);

    const exists = (id) => {
         const exist = cart.some((p)=> p.id === id);
         return exist;
    };

    const addItem =(item)=>{
        if(exists(item.id)){
            //alert("Ya existe en el carrito");
            const updateCart = cart.map((prod)=>{
              if(prod.id === item.id){
                return{...prod,quantity: prod.quantity + item.quantity};
              }  else{
                return prod;
              }
              
            });
            setCart(updateCart);
            alert("Se agrego al carrito");            
            }else{
            setCart([...cart,item]);
            alert(`${item.name} agregado`);
            }
    };
//elimina solo un producto - dfiltra por id
const deleteItem = (id) => {
     const filtered = cart.filter((p) => p.id !== id)
     setCart(filtered);
     alert("Producto eliminado");
};

//vacia el carrito
    const clearCart = () => {
        setCart([]); 
    };

    const getTotalItems = () => {
       // if(cart.length) {
      //      return cart.length;
     //   }
     const totalItems = cart.reduce((acc,p) => acc+ p.quantity,0);
     return totalItems;
    };

    //calcular total
const total = () => {
    const total = cart.reduce((acc,p)=>acc + p.price * p.quantity,0) ;

    return Math.round(total * 100)/100;
};

const checkout = () => {
     const ok = confirm("Seguro que quiere finalizar la comra?")
     if(ok){
        alert("Compra finalizada con exito!!");
        clearCart();
     }
}

    const values = {
        cart, addItem, clearCart, getTotalItems,deleteItem,total,checkout
    };

    return  <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}