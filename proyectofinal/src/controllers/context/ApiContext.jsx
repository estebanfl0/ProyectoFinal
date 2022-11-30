import React,{ createContext, useEffect, useState, useMemo, useContext} from "react";
import axios from 'axios';
import ApiUrl from '../api/helpers/config'

/* Creamos el context, se le puede pasar un valor inicial */
const ApiContext = createContext();

export const ApiProvider = (props) => {
  // creamos las constantes necesarias para manejar el estado
 const Url = ApiUrl
  
  /* Se programa el use effect*/
  useEffect(() => {


    // nota: como segundo parametro se envia los hooks que no se desean alterar
  }, []);







  // ------> la parte de abajo se encarga de el envio de la data atraves del hook <----------
  const value = useMemo(()=>{
    return ({
      // aqui se retorna lo que se desea utilizar en el contexto
      
    })
    // nota: como segundo parametro se envia los hooks que no se desean alterar
  },[])

  return (
    // aqui se genera el jsx que genera el provedor
    <ApiContext.Provider value={value} {...props} />
  );
};

// aqui se genera el return del hook
export function useApiContext(){
  const context = useContext(ApiContext)
  if(!context){
    throw new Error('este hook debe estar dentro del provedor Api')
  }
  return context;
};
