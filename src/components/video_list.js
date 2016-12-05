// doesn't need state since it doesn't re-render itself
// so we don't need a class Component

import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  console.log(props);
  return (
    <ul className='col-md-4 list-group'>
      {props.videos.length}
    </ul>
  )
}

export default VideoList;
