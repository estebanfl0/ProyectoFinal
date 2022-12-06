import React,{ createContext, useMemo, useContext} from "react";
import ApiUrl from '../api/helpers/config'
import Authentication from '../api/helpers/authentication'
import User from '../api/user'
import userData from '../api/userData'

/* Creamos el context, se le puede pasar un valor inicial */
const ApiContext = createContext();

export const ApiProvider = (props) => {  
  // se programa es uso de los hooks para la autenticacion async de la API
  const {login,logout,register} = Authentication(ApiUrl)  
  // se progrma el uso async de la API para la tabla de users
  const {createUser, getUser,getAllUsers,updateUser,deleteUser} = User(ApiUrl)
  //se programa el uso asyn de la api para la tabla de data users 
  const {createData,getData,updateData} = userData(ApiUrl)

  // ------> la parte de abajo se encarga de el envio de la data atraves del hook <----------
  const value = useMemo(()=>{
    return ({
      // aqui se retorna lo que se desea utilizar en el contexto
      // auth
      login,
      logout,
      register,
      // user
      createUser,
      getUser,
      getAllUsers,
      updateUser,
      deleteUser,
      // userdata
      createData,
      getData,
      updateData,
      //publication
      
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