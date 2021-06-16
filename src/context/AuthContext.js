import axios from "axios";
import React, { useReducer } from "react";

const INIT_STATE = {
 userId: null,
 email: null,
 login: null
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "":
      return {
        
      };
    case "":
      return {
       
      };
    default:
      return state;
  }
};

export const teatrContext = React.createContext();
const { REACT_APP_API_URL: URL } = process.env;

export default function TeatrContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  
  return (
    <teatrContext.Provider
      value={{
       
      }}
    >
      {props.children}
    </teatrContext.Provider>
  );
}