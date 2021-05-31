import React from 'react';

const Alert3 = (props) => {
    const {text, color} = props;
    const colorClasses = {
        red: 'alert-danger',
        orange: 'alert-warning',
        green: 'alert-success'
    }
    if (colorClasses[color] === undefined) {
        return (
            alert('color does not exist')
        )
    } else {
        return (
            <div className={`alert ${colorClasses[color]}`} role="alert">
            {text}
            </div>
            )
        }
    }

export default Alert3;
    