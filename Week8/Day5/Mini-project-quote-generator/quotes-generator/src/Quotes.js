import React from 'react';

export default class QuotesComponent extends React.Component {
    render() {
        const html = document.documentElement;
        html.style.backgroundColor = (this.props.displayColor);
        console.log(this.props.randomQuote)
        return(
            <div style={{ backgroundColor: 'white '}} className="box">
                <div style={{ color: this.props.displayColor, fontWeight: 'bold', fontSize: "30px" }}>"{this.props.randomQuote[0].quote}"</div>
                <br/>
                <div style={{ color: this.props.displayColor, fontWeight: 'bold', textAlign: 'right', fontSize: "18px" }}>- {this.props.randomQuote[0].author}</div>
                <button>New Quote</button>
            </div>
        )
    }
}