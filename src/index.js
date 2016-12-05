import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyD0ZuAxQoaQOap_caMnSppduiHk3nsDntI';


// Create a new component ... produces some html
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] }
    YTSearch({key: API_KEY, term: 'deer valley'}, (videos) => {
      this.setState({videos}); // {videos: videos}
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

// Insert component generate HTML and put it in DOM
ReactDOM.render(<App/>, document.querySelector('.container'));
