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

  render() {
    const { countriesList } = this.state;
    return (
      <div>
        <select>
          <option value="">Please select...</option>
          {countriesList.map((item, i) => {
            return (
              <option key={item.country_id} value={item.country_id}>
                {item.country}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}