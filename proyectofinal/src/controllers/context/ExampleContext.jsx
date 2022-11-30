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

  const [datos,setDatos] = useState({password:''})
  const handleInputChange = (event) => {
    setDatos({
    
        ...datos,
        [event.target.password] : event.target.value
        
      })
      const valorINput = event.target.value
      console.log(valorINput)
      
    }
const enviarDatos = (event) => {
  event.preventDefault()
  console.log('enviando datos...' + datos.password)
}
  // constructor(props) {
  //     super(props)
  //     this.state = {
  //       passwordP: '12345',
  //       passwordA:'admin',
  //       authorized1: false,
  //       authorized2: false

  //     };
  //     this.authorize = this.authorize.bind(this);
  //   };
  
  //   authorize(e) {
  //     const password = e.target.querySelector(
  //       'input[type="password"]').value;
  //     const auth1 = password === this.state.passwordP;
  //     const auth2 = password === this.state.passwordA;

  //     this.setState({
  //       authorized1: auth1,
  //       authorized2:auth2
  //     });
  //   }

  return (
    /* Envolvemos el children con el provider y le pasamos un objeto con las propiedades que necesitamos por value */
    <ApiContext.Provider
      value={{exampleItems,handleInputChange,enviarDatos,datos}}
    >
      {children}  
    </ApiContext.Provider>
  );
};

export default ApiContext;
