import "./App.css";
import { NavLink, Switch, Route } from "react-router-dom";
import styled from "styled-components"

import LandingPage from "./components/LandingPage";
import Accessories from "./components/Accessories";
import HomeGoods from "./components/HomeGoods";
import Beauty from "./components/Beauty";
import Collectibles from "./components/Collectibles";
import Cart from "./components/Cart";

const StyledHeader = styled.header `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`

const StyledLogo = styled.h1 `
  margin: 0 auto;
`

const CartIcon = styled.img `
  width: 50px;
  height: auto;
`

const StyledNav = styled.nav `
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #B29C88;
  margin-top: 20px;
  height: 70px;

`

function App() {
  return (
    <div className="App">
      <StyledHeader>
        <StyledLogo>
          <img
            src="./honeypot-logo.png"
            alt="honeypot logo in yellow and brown. Letter O is replaced with an icon of a beehive"
          />
        </StyledLogo>
        <div>
        <NavLink style={{margin: "auto 0", padding: "0 30px"}} to="/shopping-cart">
          <CartIcon src="./shopping-cart.png" alt="brown shopping cart icon" />
        </NavLink>
        </div>
        <StyledNav>
          <NavLink style={{padding: "0 20px", textDecoration: "none", alignSelf: "center"}} exact to="/">New</NavLink>
          <NavLink style={{padding: "0 20px", textDecoration: "none", alignSelf: "center"}} to="/accessories">Accessories</NavLink>
          <NavLink style={{padding: "0 20px", textDecoration: "none", alignSelf: "center"}} to="/home-goods">Home</NavLink>
          <NavLink style={{padding: "0 20px", textDecoration: "none", alignSelf: "center"}} to="/beauty">Beauty</NavLink>
          <NavLink style={{padding: "0 20px", textDecoration: "none", alignSelf: "center"}} to="/collectibles">Collectibles</NavLink>
        </StyledNav>
      </StyledHeader>
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
