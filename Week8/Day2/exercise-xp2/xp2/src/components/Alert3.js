import React from 'react';

const Alert3 = (props) => {
    const {text, color} = props;
    const colorClasses = {
        red: 'alert-danger',
        orange: 'alert-warning',
        green: 'alert-success'
    }
    console.log(color)
    if (colorClasses[props.color] == undefined) {
        return (
            alert('color does not exist')
        )
    } else {
        return (
            <div class={`alert ${colorClasses[props.color]}`} role="alert">
            {text}
            </div>
            )
        }
    }

export default Alert3;
    