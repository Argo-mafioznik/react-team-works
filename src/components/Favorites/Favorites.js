import React, { useContext, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { storeContext } from "../../contexts/StoreContext";
import { Link } from "react-router-dom";
import classes from "./favorites.module.css";
import MainLayout from "../../Layouts/MainLayout";

export default function Favorites() {
  const { favorites, getFavorites } = useContext(storeContext);

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <MainLayout>
      <Link to="/">
        <button className={classes.home}>Home</button>
      </Link>
      <TableContainer className={classes.paper}>
        <Table className={classes.table} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell}>Image:</TableCell>
              <TableCell className={classes.tableCell} align="right">
                Title:
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                Price:
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                Count:
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                SubPrice:
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {favorites.products ? (
              <>
                {favorites.products.map((elem) => (
                  <TableRow key={elem.item.id}>
                    <TableCell>
                      <img
                        className={classes.cartImages}
                        style={{ width: "200px" }}
                        src={elem.item.images[0]}
                        alt=""
                      />{" "}
                    </TableCell>
                    <TableCell align="right">{elem.item.title}</TableCell>
                    <TableCell align="right">{elem.item.price}</TableCell>
                    <TableCell align="right"></TableCell>яяяяяяяя
                  </TableRow>
                ))}
              </>
            ) : null}
          </TableBody>
        </Table>
      </TableContainer>
    </MainLayout>
  );
}
