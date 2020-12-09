import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';
const KEY = ' AIzaSyDl_DruuOusutTFXwuJPBlgiHLgdPE5JsM';

class App extends Component {
  state = { videos: [], selectedVideo: null };
  componentDidMount() {
    this.onTermSubmit('Day in life of a softwer enginear');
  }

  onTermSubmit = async (term) => {
    const responce = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
      },
    });
    this.setState({
      videos: responce.data.items,
      selectedVideo: responce.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
