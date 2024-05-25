import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, onArrowClick} = props
  const clickArrow = () => {
    onArrowClick(suggestionItem.suggestion)
  }
  return (
    <li className="suggestion-item-container">
      <p className="suggestion-para">{suggestionItem.suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={clickArrow}
      />
    </li>
  )
}

export default SuggestionItem
