import React, { useState } from "react";
import { User, Send, UserCog } from "lucide-react";

const ChatOnline = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How can i help you today?",
      sender: "doctor",
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        text: newMessage,
        sender: "user",
        timestamp: new Date(),
      };
      setMessages([...messages, message]);
      setNewMessage("");

      // Simulate doctor response (remove this when connecting to real backend)
      setTimeout(() => {
        const doctorResponse = {
          id: messages.length + 2,
          text: "I've received your message. How else can I assist you?",
          sender: "doctor",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, doctorResponse]);
    }, 1000);
    }
};
return (
    <div className="chat-container">
        <div className="chat-header">
        <div className="avatar doctor">
            <UserCog size={24} />
        </div>
        <div>
            <h2 className="text-xl font-semibold">Dr. Ahmed Abdelaziz</h2>
            <div className="online-status">
            <div className="online-indicator"></div>
            <span>Online</span>
        </div>
        </div>
    </div>

    <div className="chat-messages">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.sender}`}>
            <div className="avatar">
              {message.sender === "user" ? (
                <User size={24} />
              ) : (
                <UserCog size={24} />
              )}
            </div>
            <div className="message-content">
              <p>{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="chat-input">
      <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button className="send-button" onClick={handleSendMessage}>
          <Send size={20} />
          send
        </button>
      </div>
    </div>
  );
};

export default ChatOnline;
