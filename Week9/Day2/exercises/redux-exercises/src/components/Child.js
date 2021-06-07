import React from 'react';
import { connect } from 'react-redux';


const Child = (props) => {
    return (
        <div>
        <h1>CHILD</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        property_one: state.property_one,
        property_tow: state.property_two,
    }
}

const mapDispatchToProps = (state) => {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Child);