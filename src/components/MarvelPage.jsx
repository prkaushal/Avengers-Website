import React from 'react'
import styled from 'styled-components'

const MarvelPage = () => {
  return (
    <Box>
        <Page>
            <img src="/MARVEL.png" alt="background image" />
        </Page>
    </Box>
  )
}


const Box = styled.div`
display: flex;
justify-content: center;
background-color: yellow;
`

const Page = styled.div`
background-color: #ED1D24;
display: flex;
justify-content: center;
align-items: center;
height: calc(100vh - 38px);
width: 1500px; 

img{
    width: auto;
    height: 300px;
}
`

export default MarvelPage