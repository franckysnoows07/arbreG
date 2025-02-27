import { useState } from "react";
import Message from './Message';
import {getChatbotResponse} from '../services/chatbotService';
//import PropTypes from "prop-types";

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
  
    const handleSendMessage = async () => {
      if (input.trim() === '') return;
  
      const userMessage = { sender: 'user', text: input };
      setMessages([...messages, userMessage]);
  
      const botResponse = await getChatbotResponse(input);
      setMessages([...messages, userMessage, { sender: 'bot', text: botResponse }]);
  
      setInput('');
    };
  
    return (
      <div className="chatbot">
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <Message key={index} sender={msg.sender} text={msg.text} />
          ))}
        </div>
        <div className="chatbot-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
          />
          <button onClick={handleSendMessage}><i class="fa-solid fa-paper-plane"></i></button>
        </div>
      </div>
    );
  };

  Chatbot.propTypes = {};

  
  export default Chatbot;