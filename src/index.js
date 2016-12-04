import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyD0ZuAxQoaQOap_caMnSppduiHk3nsDntI';


// Create a new component ... produces some html
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] }
    YTSearch({key: API_KEY, term: 'deer valley'}, data => {
      this.setState({videos: data})
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

// Insert component generate HTML and put it in DOM
ReactDOM.render(<App/>, document.querySelector('.container'));
