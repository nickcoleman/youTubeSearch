import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    // state is only manipulated w/i the constructor function
    this.state = {term: ''};
  }

  render () {
            // prop: onChange
            //on - montior  Change - event being monitored
    // return <input onChange={this.onInputChange} />;
    return (
      <div>
        <input onChange={event => this.setState({term: event.target.value})} />
        <p>Value of input: {this.state.term}</p>
      </div>
    )
  }
}

export default SearchBar;
