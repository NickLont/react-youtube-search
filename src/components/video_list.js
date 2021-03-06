import React from 'react'
import PropTypes from 'prop-types'

import VideoListItem from './video_list_item'

const VideoList = ({videos, onVideoSelect}) => {
  return (
    <ul className="col-md-4 list-group">
      {
        videos.map(
          (video) => {
            return (
              <VideoListItem
                key={video.etag}
                video={video}
                onVideoSelect={onVideoSelect}
              />
            )
          }
        )
      }
    </ul>
  )
}
VideoList.propTypes = {
  videos: PropTypes.array,
  onVideoSelect: PropTypes.func
}

export default VideoList
