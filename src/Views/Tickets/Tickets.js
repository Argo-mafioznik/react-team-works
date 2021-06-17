import React, { useContext, useEffect } from "react";
import ProductsList from "../../components/ProductsList";
import { storeContext } from "../../contexts/StoreContext";
import MainLayout from "../../Layouts/MainLayout";
import classes from "./tickets.module.css";

export default function Tickets() {
  const { products, fetchProducts } = useContext(storeContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <MainLayout>
        <h3 className={classes.h3}>Концерты</h3>
        <ProductsList products={products} />
      </MainLayout>
    </div>
  );
}
