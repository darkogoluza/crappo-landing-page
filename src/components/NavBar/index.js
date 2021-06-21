import React from "react";
import {
  Container,
  Logo,
  NavLink,
  NavList,
  Login,
  Register,
  LineDivider,
  ButtonWrapper,
} from "./navBarElements";
import logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <>
      <Container>
        <Logo src={logo} />
        <NavList>
          <NavLink href="#">Products</NavLink>
          <NavLink href="#">Features</NavLink>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Contact</NavLink>
        </NavList>
        <ButtonWrapper>
          <Login>Login</Login>
          <LineDivider />
          <Register>Register</Register>
        </ButtonWrapper>
      </Container>
    </>
  );
};

export default NavBar;
