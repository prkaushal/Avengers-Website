import React from "react";
import styled from "styled-components";

const HeroesList = ({setSelectId}) => {
  console.log(setSelectId)
const heroes = [
  {
    image:"/ironman.jpg",
    gradientClass:"ironman"
  },

  {
    image:"/captain america.jpg",
    gradientClass:"captain"
  },
  {
    image:"/thor.jpg",
    gradientClass:"thor"
  },
  {
    image:"/hilk.jpg",
    gradientClass:"hulk"
  },
  {
    image:"/blackwidow.jpg",
    gradientClass:"widow"
  },
  {
    image:"/hawkeye.jpg",
    gradientClass:"hawkeye"
  },
]


const handleClick=(index)=>{
setSelectId(index)
}
  return (
    <Heroeslist>{
      heroes.map((hero,index) =>{
        return(

          <div onClick={()=>handleClick(index)} key={index} className="container">
          <img src={hero.image} alt="iron man" />
          <div className={`gradient ${hero.gradientClass}`}></div>
       </div>
        )
      })
    }
      
     
    </Heroeslist>
  );
};

const Heroeslist = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 288px;
  
  overflow: scroll;
  overflow-x: hidden;
  /* scroll bar styling */
  direction: rtl;

  &::-webkit-scrollbar {
    width: 40px;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.5047268907563025) 0%,
      rgba(0, 0, 0, 0.499124649859944) 100%
    );
    border: 1px solid white;
    position: absolute;
  }
  &::-webkit-scrollbar-thumb {
    background: rgb(0, 0, 0);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(92, 92, 92, 1) 40%,
      rgba(92, 92, 92, 1) 66%,
      rgba(0, 0, 0, 1) 100%
    );
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat; /* Prevent repeating the image */
    border-radius: 5px;
    border: 1px solid white;
  }

  div {
    width: 250px;
    height: 160px;
    position: relative;
    cursor: pointer;

    img {
      width: 250px;
      height: 160px;
      object-fit: cover;
    }
    .gradient {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.2)
      );
    }
    .ironman:hover {
      background: rgb(255, 0, 0);
      background: linear-gradient(
        90deg,
        rgba(255, 0, 0, 1) 0%,
        rgba(212, 0, 0, 1) 10%,
        rgba(0, 0, 0, 0) 100%
      );
    }
    .captain:hover {
      background: rgb(0, 65, 255);
      background: linear-gradient(
        90deg,
        rgba(0, 65, 255, 1) 0%,
        rgba(0, 48, 255, 1) 9%,
        rgba(255, 0, 0, 0) 100%
      );
    }
    .thor:hover {
      background: rgb(0, 255, 248);
      background: linear-gradient(
        90deg,
        rgba(0, 255, 248, 1) 0%,
        rgba(0, 211, 212, 1) 10%,
        rgba(0, 0, 0, 0) 100%
      );
    }
    .hulk:hover {
      background: rgb(0, 255, 29);
      background: linear-gradient(
        90deg,
        rgba(0, 255, 29, 1) 0%,
        rgba(0, 212, 24, 1) 10%,
        rgba(0, 0, 0, 0) 100%
      );
    }
    .widow:hover {
      background: rgb(255, 239, 0);
      background: linear-gradient(
        90deg,
        rgba(255, 239, 0, 1) 0%,
        rgba(212, 210, 0, 1) 10%,
        rgba(0, 0, 0, 0) 100%
      );
    }
    .hawkeye:hover {
      background: rgb(141, 0, 255);
      background: linear-gradient(
        90deg,
        rgba(141, 0, 255, 1) 0%,
        rgba(149, 0, 212, 1) 10%,
        rgba(0, 0, 0, 0) 100%
      );
    }
  }
`;

export default HeroesList;
