import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Alert (props) {
    const {text} = props;
    return (
        <div className="alert alert-danger" role="alert">
            {text}
        </div>
    )
}

export default Alert;