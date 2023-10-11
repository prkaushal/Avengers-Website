import React from 'react'
import styled from 'styled-components'

const Series = ({series}) => {
  return (
    <Box>
        <img src={series.imageUrl} alt="poster" />
        <h2>{series.title}</h2>
    </Box>
  )
}

const Box = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;

img{
    width: 200px;
    height: auto;
    border-radius: 10px;
    transition: transform 0.3s ease;
}
img:hover{
    transform: scale(1.05);
}

h2{
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: lighter;
    cursor: pointer;
    width: 200px;
    text-align: center;
}
h2:hover{
    color: yellow;
    
}
`

export default Series