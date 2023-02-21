// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsListItems, findOut, isActive} = props
  const {displayText, tabId} = tabsListItems

  const clicked = () => {
    findOut(tabId)
  }
  const filterCss = tabId === isActive ? 'btn1' : ''
  return (
    <li className={`list  ${filterCss}`}>
      <button type="button" className="button" onClick={clicked}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
