import './App.css';
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      genre: '',
      year: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmitForm(event) {
    event.preventDefault();
    console.log(this.state)
    document.getElementById('success').style.display = 'block';
  }

  render() {

    return (
      <div>
        <h1>NEW BOOK</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.onInputChange} />
          <input type="text" placeholder="Author" name="author" value={this.state.author} onChange={this.onInputChange} />
          <input type="text" placeholder="Genre" name="genre" value={this.state.genre} onChange={this.onInputChange} />
          <input type="number" placeholder="Year Published" name="year" value={this.state.year} onChange={this.onInputChange} />
          <br/>
          <button type="submit" value="Submit" onClick={this.onSubmitForm}>Submit</button>
          <p id="success" style={{color: 'green'}}>Form sent successfully!</p>
        </form>
      </div>
    );
  }
}

export default App;
