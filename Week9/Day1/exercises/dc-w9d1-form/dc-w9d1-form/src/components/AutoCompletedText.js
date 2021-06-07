import React from 'react';
import countries from './Countries'

export default class AutoCompletedText extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          suggestions: [],
          text: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.setState({suggestions: countries})
    }

    handleChange(event) {
        this.setState({text: event.target.value.toLowerCase()})
    }

    handleClick(event) {
        const input = document.getElementById('input')
        input.value = event.target.innerText;
    
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
                <input type="text" onChange={this.handleChange} value={text} id="input"/>
                <hr/>
                <div className="list">
                <>{filtered.map((item, i) => {
                return(
                    <Country text={text} name={item} countries={filtered} className="list" key={i}
                    handleClick={this.handleClick} />
                    )
                })}
                </>  
                </div>
            </div>

            <div id="suggestions">
                <p>Suggestions: {filtered.length}</p>
            </div>
            </>
        )
    }
}

const Country = (props) => {
    const {handleClick} = props;
    return(
        <>
            <div>
            <div className="country" onClick={handleClick}>
            {props.name}
            </div>
            </div>
        </>    
        )
    }
