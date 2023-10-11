import React from "react";
import styled from "styled-components";

const Menu = () => {
  return (
    <Box>
      <Menulist>
        <First>
          <h4>FILMS</h4>
        </First>
        <Second>
          <h4>APPEARENCES</h4>
        </Second>
        <Third>
          <h4>WEB SERIES</h4>
        </Third>
      </Menulist>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  border:  1px solid white;

`;

const Menulist = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 38px;
  background: rgb(0,0,0);
background: linear-gradient(90deg, rgba(0,0,0,0.5) 25%, rgba(0,0,0,0.5) 100%);  
  font-family: Arial, Helvetica, sans-serif;
  
`;

const First = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(90deg);
border:  1px solid white;
height: 38px;
width: 225px;
color: white;
&:hover{
    background-color: #c7b500;
    color: black;
  }

h4{
    font-weight: 100;
}

`;
const Second = styled.div`
height: 38px;
width: 225px;
display: flex;
justify-content: center;
align-items: center;
transform: rotate(90deg);
border: 1px solid white;
color: white;
&:hover{
    background-color: #c7b500;
    color: black;
  }

h4{
    font-weight: 100;
}
`;
const Third = styled.div`
  height: 38px;
  width: 225px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(90deg);
  border: 1px  solid white;
  color: white;

  &:hover{
    background-color: #c7b500;
    color: black;
  }

  h4{
    font-weight: 100;
}
`;

export default Menu;
