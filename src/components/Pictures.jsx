import React from 'react'
import styled from 'styled-components'
import Menu from './Menu'

const Pictures = ({imageUrl}) => {
  console.log(imageUrl)
  return (
    <Box>
        <Picture>
            <img src={imageUrl} alt="iron man" />
        </Picture>
        <Menu/>
        
    </Box>
  )
}

const Box = styled.div`
display: flex;
`

const Picture = styled.div`
/* display: flex;
width: calc(100vh - 888px);
height: 100vh; */

width: 440px; 
  height: calc(100vh-38px) ;
  /* border: 1px solid white; */

img{
    width: 400px;
    height: auto;
   


    /* position: absolute; */
  top: 10px; /* Adjust this value to place the image where you want */
  right: -80px; /* Adjust this value to place the image where you want */
 
}
`



export default Pictures