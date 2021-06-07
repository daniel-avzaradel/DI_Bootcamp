import React from 'react';
import countries from './Countries'

export default class AutoCompletedText extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          suggestions: countries,
          text: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({text: event.target.value.toLowerCase()})
    }

    render() {
        const {text, suggestions} = this.state
        const filtered = suggestions.filter((item) => {
            if(text.length > 0) {
                return item.toLowerCase().indexOf(text) === 0;
            } else {
                return '';                
            }
        })
            
        
        return(
            <>
            <div className="p-3 text-center">
                <h3>Auto Completed</h3>
                <p>by: Daniel Avzaradel</p>
                <input type="text" onChange={this.handleChange} value={text}/>
                <hr/>
                <div className="list">
                <Country text={text} countries={filtered} className="list"/>
                </div>
            </div>

            <div id="suggestions">
                <p>Suggestions: {filtered.length}</p>
            </div>
            </>
        )
    }
}

const Country = ({countries}) => {
   console.log(countries);
    return(
        <>{countries.map((item, i) => {
            return(
                <div key={i}>
                <div className="country">
                {item}
                </div>
                </div>
            )
        })}
        </>    
    )
}