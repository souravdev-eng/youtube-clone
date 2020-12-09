import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';
const KEY = ' AIzaSyDl_DruuOusutTFXwuJPBlgiHLgdPE5JsM';

const App = () => {
  const [video, setVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit('Day in life of a softwer enginear');
  }, []);

  const onTermSubmit = async (term) => {
    const responce = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
      },
    });
    setVideo(responce.data.items);
    setSelectedVideo(responce.data.items[0]);
  };
  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className='ui container'>
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetails video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList onVideoSelect={onVideoSelect} videos={video} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
