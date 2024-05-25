import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onArrowClick = suggestion => {
    this.setState({
      searchInput: suggestion,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const serchedList = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="img"
          alt="google logo"
        />
        <div className="search-container">
          <div className="search-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-logo"
              alt="search icon"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
          <ul className="suggestion-container">
            {serchedList.map(eachSuggestion => (
              <SuggestionItem
                suggestionItem={eachSuggestion}
                onArrowClick={this.onArrowClick}
                key={eachSuggestion.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
