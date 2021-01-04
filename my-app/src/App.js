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
  padding: 20px;
  font-family: "Lato";
  font-size: 1em;
  font-weight: 700;
  /* background-color: #d8cdc3; */
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
  border-top: 2px solid #B19C87;
  border-bottom: 2px solid #B19C87;
  margin-top: 20px;
  height: 70px;
  font-family: "Lato";
`;

const StyledFooter = styled.footer `
  background-color: #B19C87;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
`

const StyledCopyright = styled.p `
  margin-top: 20px;
  margin-left: 20px;
  font-family: "Lato";
  color: white;
  font-size: 1.0em;
`

const StyledSocial = styled.section `
  margin-top: 20px;
  margin-right: 70px;
  width: 200px;
  text-align: left;
  font-family: "Lato";
  color: white;
  font-size: 1.2em;
`

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
          Deals
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
      <StyledFooter>
        <StyledCopyright>HoneyPot<span>{'\u00A9'}</span></StyledCopyright>
        <StyledSocial>
          <h6>Follow us</h6>
        </StyledSocial>
      </StyledFooter>
    </div>
  );
}

export default App;
