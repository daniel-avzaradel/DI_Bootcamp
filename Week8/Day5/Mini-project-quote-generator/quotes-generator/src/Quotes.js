import React from 'react';

export default class Quotes extends React.Component {
    render() {
        const randomColor = this.props.displayColor();
        const html = document.documentElement;
        html.style.backgroundColor = randomColor;

        return(
            <div style={{ backgroundColor: 'white '}}>
                <div style={{ color: randomColor }}>
                    <h1 id="quote">"{this.props.quote}"</h1>
                    <p id="author"> - {this.props.author}</p>
                </div>
                <button style={{ backgroundColor: randomColor}}
                id="new" onClick={this.props.handleClick}>New Quote</button>
            </div>
        )
    }
}