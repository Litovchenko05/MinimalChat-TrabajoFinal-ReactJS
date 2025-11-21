import { NavLink } from 'react-router-dom'
import AddNewChat from '../AddNewChat/AddNewChat'
import './ChatList.css'


const ChatList = ({chats, addNewChat}) => {


  return (
    <div className="chatList">
      <div className='chatList__scrollArea'>
        {chats.map(chat =>
        <NavLink 
          key={chat.id} 
          to={"/chat/" + chat.id}
          className={({ isActive }) => `chatList__item ${isActive ? "chatList__item--selected" : ""}`}>
          <img className='chatList__item--avatar' src={chat.avatar} />
          <div className="chatList__item--text">
            <h3 className='chatList__item--name'>{chat.name}</h3>
            <span className={`chatList__item--status ${chat.isOnline ? "online" : "offline"}`}>
              {chat.isOnline ? "Online" : chat.lastSeen}
            </span>
          </div>
        </NavLink>
      )}
      </div>

      <div className="addChatForm">
        <AddNewChat addNewChat={addNewChat}/>
      </div>
    </div>
  )
}

export default ChatList