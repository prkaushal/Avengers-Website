import React from "react";
import styled from "styled-components";

const StanLeePage = () => {
  return (
    <Box>
    <Page>
      <Content>
        <Photo>
          <img src="/Stan_Lee.JPG.webp" alt="stan lee" />
          <div>
            <h1>Stan Lee </h1>
            <h3>(Dec 28, 1922 - Nov 12, 2018)</h3>
          </div>
        </Photo>
        <Info>
          <h1>ABOUT</h1>
          <h4>
            Stan Lee (born Stanley Martin Lieber December 28, 1922 - November
            12, 2018) was an American comic book writer, editor, publisher, and
            producer.
            <br />
            <br />
            He rose through the ranks of a family-run business called Timely
            Comics which would later become Marvel Comics. He was the primary
            creative leader for two decades, leading its expansion from a small
            division of a publishing house to a multimedia corporation that
            dominated the comics and film industries. In collaboration with
            others at Marvel—particularly co-writers/artists Jack Kirby and
            Steve Ditko—he co-created iconic characters, including superheroes
            Spider-Man, the X-Men, Iron Man, Thor, the Hulk, Ant-Man, the Wasp,
            the Fantastic Four, Black Panther, Daredevil, Doctor Strange, the
            Scarlet Witch, and Black Widow.
            <br />
            <br />
            These and other characters' introductions in the 1960s pioneered a
            more naturalistic approach in superhero comics, and in the 1970s Lee
            challenged the restrictions of the Comics Code Authority, indirectly
            leading to changes in its policies.
            <br />
            In the 1980s he pursued the development of Marvel properties in
            other media, with mixed results.
          </h4>
          <h5>Know more </h5>
        </Info>
      </Content>
      </Page>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: center;
  background-color: yellow;
`;

const Page = styled.div`
width: 1500px;
height: 100vh;
background-color: red;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: red;
  padding: 10px 100px 10px 150px;
  
  gap: 40px;
`;

const Photo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
    font-family: Arial, Helvetica, sans-serif;  
    color: white;

    h3{
        font-weight: 100;
    }
  }

  img {
    width: auto;
    height: 500px;
    border-radius: 20px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  color: white;
  justify-content: center;
  padding-bottom: 80px;

  h1{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 900;
  }

  h4{
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
  }

  h5{
    color: yellow;

  }
`;

export default StanLeePage;
