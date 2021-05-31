import React from 'react';

const Alert2 = (props) => {
    const {text, show} = props;

    if(props.show === false){
        return null;
    }
    else{
        // return here the component html
        return(
            <div class="alert alert-danger" role="alert">
            {text}
            </div>
        )
    }
};

export default Alert2;