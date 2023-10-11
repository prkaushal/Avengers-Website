import React from "react";
import styled from "styled-components";

const Title = ({title1,title2}) => {
  return (
    <Box>
      <h1 className="part1">{title1}</h1>
      <h1 className="part2">{title2}</h1>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;

  .part1 {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bolder;
    color: white;
    font-size: 50px;
  }
  .part2 {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: lighter;
    color: white;
    font-size: 50px;
  }
`;

export default Title;
