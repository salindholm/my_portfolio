import React from "react";
import { Container } from "semantic-ui-react";

const Hello = () => {
  return (
    <Container >
      <h1 id="hello-header">Hello!</h1>
      <p id="hello-text">
        My name is Sanne Lindholm, a fullstack developer based in Stockholm. 
        <br />
        This is a portfolio to showcase my work and some info about me.
        <br />
        Enjoy!
      </p>
    </Container>
  );
};

export default Hello;