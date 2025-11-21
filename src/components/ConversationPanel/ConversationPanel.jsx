import MessageList from '../MessageList/MessageList'
import MessageInput from '../MessageInput/MessageInput'
import ChatBar from '../ChatBar/ChatBar'
import './ConversationPanel.css'

const ConversationPanel = ({ selected_chat, createNewMessage }) => {
  console.log(selected_chat)
  return (
    <div className="conversationPanel">
        <ChatBar selected_chat={selected_chat} />

        <div className="conversationPanel__messages">
          <MessageList messages={selected_chat.messages}/>
        </div>

        <div className="conversationPanel__input">
          <MessageInput createNewMessage={createNewMessage}/>
        </div>
    </div>
)
}

export default ConversationPanel