// Write your code here

import './index.css'

const AppItem = props => {
  const {eachObj} = props
  const {appName, imageUrl} = eachObj
  return (
    <li className="each-container">
      <img src={imageUrl} className="app-image" alt={appName} />

      <p type="button" className="app-name">
        {appName}
      </p>
    </li>
  )
}
export default AppItem
