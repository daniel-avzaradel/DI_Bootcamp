import React,{Component} from 'react';

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countriesList:[],
      citiesList:[]
    }
  }
  componentDidMount(){
    fetch('http://localhost:9000/getCountries')
    .then(res => res.json())
    .then(countries => {
      this.setState({countriesList:countries})
    })
    .catch(err => {
      console.log(err);
    })
  }
  handleSelect = (event) => {
    // console.log(event.target.value);
    fetch(`http://localhost:9000/getCities/${event.target.value}`)
      .then(res => res.json())
      .then(cities => {
        this.setState({citiesList:cities})
      })
      .catch(err => {
        console.log(err);
      })
  }
  renderDropdown = (array,selectname) => {
    if(array.length === 0){
      return null
    }
    return(
      <select onChange={(event)=>this.handleSelect(event)} name={selectname}>
        <option value=''>Please select...</option>
        {
          array.map((item,i)=>{
            return <option key={item.country_id||item.city_id} value={item.country_id||item.city_id}>{item.country||item.city}</option>
          })
        }
      </select>
    )
  }

  render(){
    const { countriesList, citiesList } = this.state;
    return(
        <div>
        {
          this.renderDropdown(countriesList,'countries')
        }
        {
          this.renderDropdown(citiesList,'cities')
        }
        </div>
    )
  }
}
