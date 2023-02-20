import React from "react";
import { Route, Switch } from "react-router-dom";
import Shows from "./components/Shows/Shows";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import Account from "./components/Account/Account";
import Cart from "../src/components/Cart/Cart.jsx"
import { AuthContextProvider } from "./context/AuthContext";
import { Order } from "./components/Order/Order";
import AdminApp from "./admin";
import UserAdminApp from "./miCuenta";
import Error404 from "./components/404/Error404";
import "./App.css";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Switch>
          <Route exact path={"/"}>
            <NavBar />
            <Shows />
            <Footer />
            <Cart />
          </Route>
          <Route path="/product/:id">
            <NavBar />
            <ProductDetails />
            <Footer />
            <Cart />
          </Route>
          <Route exact path={"/register"}>
            <NavBar />
            <Register />
            <Footer />
            <Cart />
          </Route>
          <Route exact path={"/micuenta"}>
            <UserAdminApp/>
          </Route>
          <Route exact path={"/comprar"}>
            <NavBar isCartDisabled={true} />
            <Order />
            <Footer />
          </Route>
          <Route exact path={"/admin"}>
            <AdminApp />
          </Route>
          <Route path='*'>
            <Error404 />
          </Route>
        </Switch>
      </AuthContextProvider>
    </>
  );
}

export default App;
