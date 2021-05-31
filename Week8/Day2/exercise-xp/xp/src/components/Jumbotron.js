import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Jumbotron = (props) => {
  const { title, description, buttonLabel, buttonUrl } = props;
  return (
    <Jumbotron>
      <h1>{title}</h1>
      <p>
        {description}
      </p>
      <p>
        <a href={buttonUrl}>
        <button variant="primary">{buttonLabel}</button></a>
      </p>
    </Jumbotron>
  );
};

export default Jumbotron;
