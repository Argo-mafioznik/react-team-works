import axios from "axios";
import React, { useReducer } from "react";

const INIT_STATE = {
  products: [],
  categories: [],
  productDetail: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "SET_PRODUCT_DETAIL":
      return {
        ...state,
        productDetail: action.payload,
      };
    default:
      return state;
  }
};

export const teatrContext = React.createContext();
const { REACT_APP_API_URL: URL } = process.env;

export default function TeatrContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const fetchProducts = async () => {
    try {
      console.log(URL);
      const response = await axios.get(`${URL}/products`);
      const products = response.data;
      const total = response.headers["x-total-count"];

      dispatch({
        type: "SET_PRODUCTS",
        payload: {
          data: products,
          total,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <teatrContext.Provider
      value={{
        products: state.products,
        fetchProducts,
      }}
    >
      {props.children}
    </teatrContext.Provider>
  );
}
