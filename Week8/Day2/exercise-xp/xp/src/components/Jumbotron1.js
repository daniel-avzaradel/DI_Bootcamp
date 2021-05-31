import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

const Jumbotron1 = (props) => {
  const { title, description, buttonLabel, buttonUrl } = props;
  return (
    <Jumbotron>
      <h1>{title}</h1>
      <p>
        {description}
      </p>
      <p>
        <a href={buttonUrl}>
        <Button variant="primary">{buttonLabel}</Button></a>
      </p>
    </Jumbotron>
  );
};

export default Jumbotron1;