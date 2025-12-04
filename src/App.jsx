import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext/CartProvider'
import { Cart } from './components/Cart/Cart'
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer/ProductFormContainer'
import { MainLayout } from './layouts/Mainlayout'
import { AdminLayout } from './layouts/Adminlayout'
import { RutaProtegida } from './components/RutaProtegida/RutaProtegida'
import { Login } from './components/Login/Login'
import { Footer } from './components/Footer/Footer'


function App() {
 

  return (
    <>
       <BrowserRouter>
       <CartProvider>
        <Routes>
          <Route element={<MainLayout/>}>
          <Route path="/" element={<ItemListContainer titulo={"Bienvenidos"} />} />
          <Route path="/category/:category" element={<ItemListContainer titulo={"Bienvenidos"}/>} />
          <Route path="/detail/:id" element={<ItemDetailContainer/>} />
          <Route path="/carrito/" element={<Cart />} />
          </Route>
          <Route path='/admin' element={<AdminLayout/>}>
          <Route index element={<Login/>}/>
          <Route path="alta-productos" element={<RutaProtegida>
            <ProductFormContainer/>
          </RutaProtegida>}/>
          </Route>
        </Routes>
        <Footer/>
        </CartProvider>
       </BrowserRouter>  
    </>
  )
}

export default App
