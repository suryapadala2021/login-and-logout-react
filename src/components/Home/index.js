import {Component} from 'react'
import Login from '../Login/index'
import Logout from '../Logout/index'
import Message from '../Message/index'
import './index.css'

class Home extends Component {
  state = {login: false}

  status = () => {
    const {login} = this.state

    if (login === true) {
      this.setState(() => ({login: false}))
    } else {
      this.setState(() => ({login: true}))
    }
  }

  render() {
    const {login} = this.state
    let text
    if (login === true) {
      text = 'Welcome User'
    } else {
      text = 'Please Login'
    }
    return (
      <div className="container">
        <div className="card">
          <Message text={text} />
          {login && <Logout click={this.status} />}
          {!login && <Login click={this.status} />}
        </div>
      </div>
    )
  }
}
export default Home
