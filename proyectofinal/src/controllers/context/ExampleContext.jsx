import { createContext, useEffect, useState } from "react";

/* Creamos el context, se le puede pasar un valor inicial */
const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  /* Creamos un estado para el carrito */
  const [exampleItems, setexampleItems] = useState(() => {
    try {
      /* Verificamos si hay productos en el local storage,
      si hay algo lo parseamos porque se guarda como string 
      y si no hay nada devolvemos un array vacio */
      const productosEnLocalStorage = localStorage.getItem("cartProducts");
      return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
    } catch (error) {
      return [];
    }
  });

  /* Cada vez que se actualize el carrito seteamos el local storage para guardar los productos */
  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(exampleItems));
  }, [exampleItems]);

  const click = ()=>{
    alert(8)
  }

  return (
    /* Envolvemos el children con el provider y le pasamos un objeto con las propiedades que necesitamos por value */
    <ApiContext.Provider
      value={{exampleItems,click }}
    >
      {children}  
    </ApiContext.Provider>
  );
};

export default ApiContext;
