import './index.css'

const Message = props => {
  const {text} = props
  return <h1 className="msg">{text}</h1>
}
export default Message
