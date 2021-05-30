import React from 'react';

const Component = () => {

    // exercise 3

    const mystyle = {
        color: 'white',
        backgroundColor: 'DodgerBlue',
        padding: '10px',
        fontFamily: 'Arial'
    }

    // exercise 4

    const mySuperStyles = {
        color: 'yellow',
        fontSize: '16px',
        fontWeight: 'bold',
        border: '1px solid yellow',
        backgroundColor: 'black',
        padding: '5px',
        borderRadius: '8px',
        cursor: 'pointer',
        margin: '10px'
    }


        return (
        <div>
        <h1>This is a header</h1>
        <p>This is a paragraph</p>
        <a href="http://localhost:3000/">This is a link</a>
        <form>
            <h1>This is a form</h1>
            <p>Enter your name</p>
            <div>
                <input type="text"></input>
                <button type="submit">Submit</button>
            </div>
        </form>

        <h2>Here's an image:</h2>
        <img src="https://images-na.ssl-images-amazon.com/images/I/819fM5kGQnL._SY355_.jpg" alt="react logo" />
        <h2>This is a list:</h2>
            <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>

        <h2>EXERCISE 2 : Styling React Using CSS #1</h2>
        <header style={{color: "salmon", fontWeight: "bold"}}>Hello Style!</header>
        <header style={{color: "salmon", fontWeight: "bold", backgroundColor: "lightblue"}}>Hello Style!</header>
        <h2>EXERCISE 3 : Styling React Using CSS #2</h2>
        <header style={mystyle}>Hello Style!</header>
        <h2>EXERCISE 4 : Styling React Using CSS #3</h2>
        <button style={mySuperStyles}>I'm a stylish button</button>
            
        </div>
    );
}

export default Component;