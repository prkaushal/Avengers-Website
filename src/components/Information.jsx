import React from "react";
import styled from "styled-components";
import Title from "./Title";

const Information = ({info}) => {
  console.log(info)
  return (
    <Box>
      <Title title1={info.titlePart1} title2={info.titlePart2} />
      <Line>
        <div className="line1"></div>
        <div className="line2"></div>
      </Line>
      <Paragraph>
        <h5>
          {info.desc}
        </h5>

        <h6>Know more</h6>
      </Paragraph>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding-top:100px ;
`;

const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  

  .line1 {
    background-color: yellow;
    height: 2px;
    width: 135px;
  }
  .line2 {
    background-color: white;
    height: 1px;
    width: 120px;
  }
`;

const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 550px;
  gap: 40px;
  padding-top: 50px;

  h5 {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-weight: 400;
  }

  h6{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 100;
    color: yellow;
  }
`;

export default Information;
