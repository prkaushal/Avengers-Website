import React from "react";
import styled from "styled-components";

const Movie = ({movie}) => {
  return (
    <Box>
      <Poster>
        <img src={movie.imageUrl} alt="poster" />
      </Poster>
      <Info>
        <h1>{movie.movietitle} </h1>
        <p>
          {movie.moviedesc}
        </p>
        <button>Watch Trailer</button>
      </Info>
    </Box>
  );
};


const Box = styled.div`
display: flex;
gap: 40px;
padding: 10px 10px 10px 20px;
align-items: center;
border: 1px solid white;
margin: 0 100px 0 100px;
border-radius: 10px;

`

const Poster = styled.div`
img{
    width: 170px;
    height: auto;
    border-radius: 10px;
    transition: transform 0.3s ease;
}
img:hover{
    transform: scale(1.1);
}
`

const Info = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
h1{
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    transition: font-size 0.3s ease;
}

h1:hover{
    font-size: 35px;
    cursor: pointer;
    color: yellow;
}
p{
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}

button{
    width: 100px;
    height: 40px;
    font-weight: 600;
    border-radius: 10px;
}
button:hover{
    background-color: yellow;
    cursor: pointer;
}
`

export default Movie;
