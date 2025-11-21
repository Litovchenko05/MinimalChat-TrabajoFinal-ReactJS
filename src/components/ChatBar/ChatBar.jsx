import './ChatBar.css'
import { useNavigate } from 'react-router-dom'
import { ArrowBigLeft } from 'lucide-react'

const ChatBar = ({ selected_chat }) => {
  const navigate = useNavigate()

  function handleCloseChat() {
    navigate("/chat")        // vuelve al estado con WelcomePanel
  }

  return (
    <header className="chatBar">
      <button className="chatBar__backBtn hoverable" onClick={handleCloseChat}>
        <ArrowBigLeft className="chatBar__backIcon" />
      </button>
      <img src={selected_chat.avatar} className="chatBar__chat--avatar"/>
      <div className="chatBar__info">
        <h3 className='chatBar__chat-name'>{selected_chat.name}</h3>
        <span className={`chatBar__status ${selected_chat.isOnline ? "online" : "offline"}`}>
          {selected_chat.isOnline ? "Online" : selected_chat.lastSeen}
          </span>
      </div>
    </header>
  )
}
export default ChatBar
