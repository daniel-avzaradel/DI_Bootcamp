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



/* OR

<!-- Jumbotron -->
  <div class="p-5 bg-light">
    <h1 class="mb-3">Title</h1>
    <h4 class="mb-3">Description</h4>
    <a class="btn btn-primary" href="" role="button">Call to action</a>
  </div>
<!-- Jumbotron -->

*/

export default Jumbotron1;