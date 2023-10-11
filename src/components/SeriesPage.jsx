import React from 'react'
import styled from "styled-components";
import Series from './Series';


const SeriesPage = () => {
  const series = [
    {
      imageUrl: "/secretinvasion.jpg",
      title: "Secret Invasion",
    },
    {
      imageUrl: "/shehulk_lob_crd_04.jpg",
      title: "She Hulk",
    },
    {
      imageUrl: "/msmarvel_lob_crd_04.jpg",
      title: "Ms. Marvel",
    },
    {
      imageUrl: "/moonknight_lob_crd_05.jpg",
      title: "Moon Knight",
    },
    {
      imageUrl: "/hawkeye_lob_crd_04.jpg",
      title: "Hawkeye",
    },
    {
      imageUrl: "/iamgroot_lob_crd_04.jpg",
      title: "I am Groot",
    },
    {
      imageUrl: "/whatif_lob_crd_01.jpg",
      title: "What If...?",
    },
    {
      imageUrl: "/wandavision_lob_crd_06.jpg",
      title: "Wanda Vision",
    },
    {
      imageUrl: "/falcws_lob_crd_03.jpg",
      title: "Falcon and The Winter Soldier",
    },
    {
      imageUrl: "/iamgroots2_lob_crd_01.jpg",
      title: "I am Groot 2",
    },
    {
      imageUrl: "/loki_lob_crd_04.jpg",
      title: "Loki",
    },
    {
      imageUrl: "/werewolfbynight_lob_crd_01.jpg",
      title: "Werewolf By Night",
    },
    {
      imageUrl: "/theguardiansofthegalaxyholidayspecial_lob_crd_02.jpg",
      title: "The Guardians Of The Galaxy Holiday Special",
    },
    

  ]
  return (
    <Box>
      <Page>
        
        <Title>
          MARVEL SERIES
        </Title>
        <Ott>
        On Disney+
        </Ott>

        <List>
        {series.map((series) => (
          <Series series={series} />
        ))}
        </List>
        <br/>
        <br/>
        <Ott>
        On Netflix
        </Ott>
        <List>
        {series.map((series) => (
          <Series series={series} />
        ))}
        </List>
      </Page>
    </Box>
  )
}


const Box = styled.div`
  display: flex;
  justify-content: center;
  background-color: yellow;
`;
const Page = styled.div`
  background: rgb(141, 0, 255);
  background: linear-gradient(
    180deg,
    rgba(141, 0, 255, 1) 0%,
    rgba(77, 0, 210, 0.9669117647058824) 100%
  );
  display: flex;
  flex-direction: column;
  
  width: 1500px;
  
`;

const Title = styled.div`
  font-size: 50px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  color: yellow;
`

const Ott = styled.div`
font-size: 40px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 80px;
  display: flex;
  justify-content: start;
  color: white;
  
`

const List = styled.div`
display: flex;
flex-wrap: wrap;
gap: 50px;
padding: 10px 80px 10px 80px;
`

export default SeriesPage