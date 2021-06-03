import React from 'react';

export default class QuotesComponent extends React.Component {
    render() {
        const html = document.documentElement;
        html.style.backgroundColor = (this.props.displayColor);
        if(this.props.randomQuote.author === '') {
            this.props.randomQuote.author = 'Unkown'
        }
        return(
            <div style={{ backgroundColor: 'white '}} className="box">
                <div className="quoteBox">
                <div style={{ color: this.props.displayColor, fontWeight: 'bold', fontSize: "30px" }}>"{this.props.randomQuote.quote}"</div>
                <br/>
                <div style={{ color: this.props.displayColor, fontWeight: 'bold', textAlign: 'right', fontSize: "18px" }}>- {this.props.randomQuote.author}</div>
                <br/>
                </div>
                <button className="quotebtn" style={{color: 'white', backgroundColor: this.props.displayColor}} onClick={() => this.props.handleClick()}>New Quote</button>
            </div>
        )
    }
}