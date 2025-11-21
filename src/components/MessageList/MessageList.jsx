import { useEffect, useRef } from "react";
import "./MessageList.css"

const MessageList = ({ messages }) => {

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <div className="messageList">
      {messages.length === 0 ? (
        <span className="messageList__empty">The chat is empty</span>
      ) : (
        messages.map(message => (
          <div
            key={message.id}
            className={`messageList__bubble messageList__bubble--${message.sender}`}>
              
            <h3 className="messageList__text">{message.text}</h3>
            <span className="messageList__time">{message.timestamp}</span>
          </div>
        ))
      )}
      <div ref={bottomRef} />
    </div>
  );
};

export default MessageList;
