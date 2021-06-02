import React, {Component} from 'react';

export default class Dropdown extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  componentDidMoun() {
    fetch("http://localhost:9000/getCountries")
      .then((res) => res.json())
      .then((countries) => {
        this.setState({ countriesList: countries });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  renderDropdown = (array) => {
      console.log('render dropdown');
      if (array.length === 0) {
          return null
      }
  }

  handleSelect(event) {
    console.log(event.target.value)
    fetch(`http://localhost:3000/getCities/${event.target.value}`)
    .then(cities => console.log(cities))
    .catch(err => {
        if(err) throw err;
    })
}

  render() {
    const { countriesList } = this.state;
    return (
        
        <select onChange={this.handleSelect}>
          <option value="">Please select...</option>
          {countriesList.map((item, i) => {
            return (
              <option key={item.country_id} value={item.country_id}>
                {item.country}
              </option>
            );
          })}
        </select>
      
    );
  }
}