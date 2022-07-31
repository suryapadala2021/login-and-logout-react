import './index.css'

const Login = props => {
  const {click} = props
  return (
    <button onClick={click} className="btn">
      Login
    </button>
  )
}
export default Login
