import { SendHorizontal } from 'lucide-react'
import './MessageInput.css'

const MessageInput = ({createNewMessage}) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const message_value = form.message.value
    if (!message_value) return
    createNewMessage(message_value)
    form.reset()
  }

  return (
    <form className="messageInput" onSubmit={handleSubmit}>
      <textarea
        name="message"
        id="message"
        placeholder="Type a message..."
        className="messageInput__textarea"
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            e.target.form.requestSubmit();
          }
        }}
      />
      <button type="submit" className="messageInput__button">
        <SendHorizontal className="sendIcon" />
      </button>
    </form>
  )
}

export default MessageInput