import "./App.css";
import { NavLink, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import LandingPage from "./components/LandingPage";
import Accessories from "./components/Accessories";
import HomeGoods from "./components/HomeGoods";
import Beauty from "./components/Beauty";
import Collectibles from "./components/Collectibles";
import Cart from "./components/Cart";

const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 20px 0 20px;
  font-family: "Lato";
  font-size: 1em;
  font-weight: 700;
`;
const FreeShipping = styled.p`
  width: 180px;
  color: #5b3610;
`;

const StyledLogo = styled.img`
  width: 200px;
  height: auto;
`;

const CartIcon = styled.img`
  width: 40px;
  height: auto;
  padding: 0 60px;
`;

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #b29c88;
  margin-top: 20px;
  height: 70px;
  font-family: "Lato";
`;

function App() {
  return (
    <div className="App">
      <StyledHeader>
        <FreeShipping>Free Shipping on Orders over $25</FreeShipping>
        <h1>
          <StyledLogo
            src="./honeypot-logo.png"
            alt="honeypot logo in yellow and brown. Letter O is replaced with an icon of a beehive"
          />
        </h1>
        <NavLink to="/shopping-cart">
          <CartIcon src="./shopping-cart.png" alt="brown shopping cart icon" />
        </NavLink>
      </StyledHeader>
      <StyledNav>
        <NavLink
          style={{
            padding: "0 50px",
            textDecoration: "none",
            alignSelf: "center",
            color: "black",
            textTransform: "uppercase",
          }}
          exact
          to="/"
        >
          New
        </NavLink>
        <NavLink
          style={{
            padding: "0 50px",
            textDecoration: "none",
            alignSelf: "center",
            color: "black",
            textTransform: "uppercase",
          }}
          to="/accessories"
        >
          Accessories
        </NavLink>
        <NavLink
          style={{
            padding: "0 50px",
            textDecoration: "none",
            alignSelf: "center",
            color: "black",
            textTransform: "uppercase",
          }}
          to="/home-goods"
        >
          Home
        </NavLink>
        <NavLink
          style={{
            padding: "0 50px",
            textDecoration: "none",
            alignSelf: "center",
            color: "black",
            textTransform: "uppercase",
          }}
          to="/beauty"
        >
          Beauty
        </NavLink>
        <NavLink
          style={{
            padding: "0 50px",
            textDecoration: "none",
            alignSelf: "center",
            color: "black",
            textTransform: "uppercase",
          }}
          to="/collectibles"
        >
          Collectibles
        </NavLink>
      </StyledNav>

      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/accessories">
          <Accessories />
        </Route>
        <Route path="/home-goods">
          <HomeGoods />
        </Route>
        <Route path="/beauty">
          <Beauty />
        </Route>
        <Route path="/collectibles">
          <Collectibles />
        </Route>
        <Route path="/shopping-cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
