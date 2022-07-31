import './index.css'

const Logout = props => {
  const {click} = props

  return (
    <button type="button" onClick={click} className="btn">
      Logout
    </button>
  )
}

export default Logout
