import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SearchBar extends Component {
  static propTypes = {
    onSearchTermChange: PropTypes.func
  }
  static defaultProps = {
    onSearchTermChange: () => {}
  }
  state = {
    term: ''
  }

  onChange = (event) => {
    this.setState({ term: event.target.value })
    this.props.onSearchTermChange(event.target.value)
  }

  render () {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default SearchBar
