import React from 'react'
import styled from 'styled-components'

const PhotoSlider = () => {
  return (
    <Box>
        <Page>
            Gallery
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
width: 1500px;
height: 100vh;
background-color: #ED1D24;
`



export default PhotoSlider