import React from "react";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <Box>
      <Page>
        <Content>
          <Info>
            <First>
              <h1>CONTACT US</h1>
              <div className="info">
                <h3>Email - Prashantkaushal9712@gmail.com</h3>
                <h3>Instagram - Prashantkaushal9712</h3>
                <h3>Youtube - The Learning Robo</h3>
              </div>
            </First>
            <Second>
            
            </Second>
            <Third>
            <h1>Leave a Message</h1>
            <textarea placeholder="Type here"></textarea>
            <button>Send</button>
            </Third>
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
display: flex;
flex-direction: column;


`

const Info = styled.div`
display: flex;
flex-direction: row;
gap: 50px;
height: 300px;



`

const First = styled.div`
display: flex;
flex-direction: column;
color: white;
gap: 30px;

h1{
    font-family: Arial, Helvetica, sans-serif;
}
.info{
    h3{
        padding-top: 20px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 500;
    }
}
`
const Second = styled.div`
background-color: white;
width: 2px;
border-radius: 20px;
`
const Third = styled.div`
display: flex;
flex-direction: column;
color: whitesmoke;
gap: 20px;

h1{
    font-family: Arial, Helvetica, sans-serif;
}

textarea{
    width: 350px;
    height: 200px;
    border: none;
    background-color: red;
    color: white;
    padding: 10px;
    border: 1px solid white;
    text-decoration: none;
}
textarea::placeholder{
    color: white;
    
    font-size: 16px;
    
}
textarea:focus {
    outline: none;
}

button{
    color: white;
    background-color: #ED1D24;
    width: 100px;
    height: 40px;
    border-radius: 20px;
}

button:hover {
    color: yellow;
}
`

export default ContactUs;
