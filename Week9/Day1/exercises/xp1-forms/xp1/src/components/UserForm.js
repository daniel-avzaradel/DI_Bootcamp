import './UserForm.css';
import React from 'react'

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      phone: '',
      email: '',
      submit: false
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmitUserForm = this.onSubmitUserForm.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  onInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmitUserForm(event) {
    event.preventDefault();
    this.setState({
        submit: true
    })
    console.log(this.state)
  }

  onReset() {
    this.setState({
        fname: '',
        lname: '',
        phone: '',
        email: '',
        submit: false
    })
  }

  render() {
    if(!this.state.submit) {
        return (
            <div>
              <h1 id="welcome">WELCOME!</h1>
              <p style={{padding: '0 6px'}}>Please provide your information bellow.</p>
              <br/>
              <form className="form" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="First Name" name="fname" value={this.state.fname} onChange={this.onInputChange} />
                <input type="text" placeholder="Last Name" name="lname" value={this.state.lname} onChange={this.onInputChange} />
                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" maxLength="10" placeholder="Phone Number" name="phone" value={this.state.phone} onChange={this.onInputChange} />
                <input type="email" placeholder="Email Address" name="email" value={this.state.email} onChange={this.onInputChange} />
                <br/>
                <button type="submit" value="Submit" onClick={this.onSubmitUserForm}>Submit</button>
              </form>
            </div>
          );
    }
    else {
        return (
            <>
            <div className="userdata">
            <h3>{this.state.lname}, {this.state.fname}</h3>
            <p style={{padding: '0 6px'}}>{this.state.phone} | {this.state.email}</p>
            <br/>
            <button onClick={this.onReset}>Reset</button>
            </div>
            </>
        )
    }
    
  }
}

export default UserForm;