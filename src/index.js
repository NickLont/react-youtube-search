import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import _ from 'lodash'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyAvz_Zu8UgmJb5frwwwgWnZE64T6Ne4BQw'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('surfboards')
  }

  videoSearch (term) {
    YTSearch({key: API_KEY, term: term},
      (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        })
      })
  }

  render () {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)
    const {videos, selectedVideo} = this.state
    return (
      <React.Fragment>
        <SearchBar
          onChangedInput = {this.onChangedInput}
          onSearchTermChange = {videoSearch}
        />
        <VideoDetail video={selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos = {videos}
        />
      </React.Fragment>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
