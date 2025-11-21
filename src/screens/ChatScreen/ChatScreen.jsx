import React, { useEffect, useState } from 'react'
import ChatList from '../../components/ChatList/ChatList'
import ConversationPanel from '../../components/ConversationPanel/ConversationPanel'
import { useParams } from 'react-router-dom'
import { getChats } from "../../services/chatService"
import newUserAvatar from '../../assets/newUser.png'
import WelcomePanel from '../../components/WelcomePanel/WelcomePanel'
import "./ChatScreen.css"


const ChatScreen = () => {
  const { chat_id } = useParams()
  const [chats, setChats] = useState([])

  function loadChats() {
    const data = getChats()
    setChats(data)
  }

  useEffect(() => {loadChats()}, [])

  const selected_chat = chats.find(chat => Number(chat.id) === Number(chat_id))

  function addNewChat(name){
    const newChat = {
      id: chats.length + 1 ,
      name: name,
      avatar: newUserAvatar,
      isOnline: true,
      lastSeen: "now",
      messages: []
    }
    setChats(prev => [...prev, newChat])
  }

  function formatTimestamp(date = new Date()) {
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const ampm = hours >= 12 ? 'PM' : 'AM'
    let hour12 = hours % 12
    if (hour12 === 0) hour12 = 12
    const minutesStr = String(minutes).padStart(2, '0')
    return `${hour12}:${minutesStr} ${ampm} Today`
  }

  function createNewMessage(message) {
    const new_message = {
      id: selected_chat.messages.length + 1,
      text: message,
      sender: 'user',
      timestamp: formatTimestamp()
    }
    setChats(
      (prev_state) => {
        return prev_state.map(
          (chat) => {
            if (Number(chat.id) === Number(chat_id)) {
              chat.messages = [...chat.messages, new_message]
            }
            return chat
          }
        )
      }
    )
    setTimeout( 
      sendAutomaticMessage,
      2000
    )
  }

  function sendAutomaticMessage(){
    const new_message = {
      id: selected_chat.messages.length + 1,
      text: "Argentina, best place in the world!",
      sender: 'app',
      timestamp: formatTimestamp()
    }
    setChats(
      (prev_state) => {
        return prev_state.map(
          (chat) => {
            if (Number(chat.id) === Number(chat_id)) {
              chat.messages = [...chat.messages, new_message]
            }
            return chat
          }
        )
      }
    )
  }


  return (
    <div className="chatScreen">
      <aside className="chatScreen__left">
        <ChatList chats={chats} addNewChat={addNewChat} />
      </aside>

      <main className="chatScreen__right">
        {!selected_chat
          ? <WelcomePanel />
          : <ConversationPanel selected_chat={selected_chat} createNewMessage={createNewMessage} />
        }
      </main>
    </div>
  )
}
    
export default ChatScreen