import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {

  // const handClick = ()=>{

  // }

  return (
    <Box>
      <Navigation>
        <LogoContainer>
          <img src="./public/avengersLogo.png" alt="logo" />
        </LogoContainer>

        <NavElements>
          <Link to={"/"} className="link" >
            <li>HOME</li>
          </Link>
          <Link to={"/heroes"} className="link" >
            <li >HEROES</li>
          </Link>

          <Link to={"/movies"} className="link">
            <li>MOVIES</li>
          </Link>

          <Link to={"/series"} className="link" >
            <li>SERIES</li>
          </Link>
          <li>GALLERY</li>
        </NavElements>

        <Hamburger>
          <img src="./public/hamburger menu.png" alt="menu" />
        </Hamburger>
      </Navigation>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: center;
  background-color: yellow;
`;

const Navigation = styled.div`
  background: rgb(0,0,0);
background: linear-gradient(90deg, rgba(0,0,0,0.5) 25%, rgba(0,0,0,0.5) 100%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1500px;
  height: 38px;
  border: 1px solid white;
`;
const LogoContainer = styled.div`
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;

  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;
const NavElements = styled.div`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  color: white;
  font-weight: 500;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  gap: 30px;
  cursor: pointer;

  .link{
    text-decoration: none;
    color: white;
  }
  

  li {
    transition: font-size 0.3s ease, color 0.3s ease;
    text-decoration: none;
  }

  li:hover {
    font-size: large;
    color: yellow;
  }
`;

const Hamburger = styled.div`
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid white;

  img {
    width: 20px;
    height: 20px;
  }
`;

export default Navbar;
