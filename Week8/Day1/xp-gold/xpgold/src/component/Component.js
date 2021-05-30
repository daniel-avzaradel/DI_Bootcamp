import React from 'react';

const Component = () => {
    const mystyle = {
        color: 'white',
        backgroundColor: 'DodgerBlue',
        padding: '10px',
        fontFamily: 'Arial'
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
            <h2>Here's an image:</h2>
            <img src="https://images-na.ssl-images-amazon.com/images/I/819fM5kGQnL._SY355_.jpg" alt="react logo" />
            <h2>This is a list:</h2>
            <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
                <h2>EXERCISE 2 : Styling React Using CSS #1</h2>
                <header style={{color: "salmon", fontWeight: "bold"}}>Hello Style!</header>
                <header style={{color: "salmon", fontWeight: "bold", backgroundColor: "lightblue"}}>Hello Style!</header>
                <h2>EXERCISE 3 : Styling React Using CSS #2</h2>
                <header style={mystyle}>Hello Style!</header>

            </ul>
        </form>
        </div>
    );
}

export default Component;