import { useState } from "react";
import PropTypes from 'prop-types';
import Message from './Message';
import { searchFamilyTree } from '../services/chatbotService';

const Chatbot = ({ onSuggestTree }) => {
  const [messages, setMessages] = useState([{sender: 'bot', text:'Bienvenue! Je suis ton assistant dans le choix de ton arbre généalogique.\n Pouvons nous démarrer ? ' }]);
  const [input, setInput] = useState('');
  const [conversationState, setConversationState] = useState('initial');

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    let botResponse;
    switch (conversationState) {
      case 'initial':
        botResponse = 'Bien, quel est le nom de ton pere ? ';
        setConversationState('fatherSurname');
        break;
      case 'fatherSurname':
        botResponse = 'Bien, quel(s) est (sont) le(s) nom(s) de ton pere ?';
        setConversationState('fatherName');
        break;
      case 'fatherName':
        botResponse = 'Pour une recherche un peu plus avancé j\' aurai besoin du nom de ton grand-pere?';
        setConversationState('grandfatherSurname');
        break;
      case 'grandfatherSurname':
        botResponse = 'Bien, quel(s) est (sont) le(s) nom(s) de ton grand-pere ?';
        setConversationState('grandfatherName');
        break;
      case 'grandfatherName': {
        const fatherSurname = messages.find(msg => msg.sender === 'user' && msg.text.includes('father\'s surname'))?.text?.split(': ')[1] ?? '';
        const fatherName = messages.find(msg => msg.sender === 'user' && msg.text.includes('father\'s name'))?.text?.split(': ')[1] ?? '';
        const grandfatherSurname = messages.find(msg => msg.sender === 'user' && msg.text.includes('grandfather\'s surname'))?.text?.split(': ')[1] ?? '';
        const grandfatherName = messages.find(msg => msg.sender === 'user' && msg.text.includes('grandfather\'s name'))?.text?.split(': ')[1] ?? '';

        const suggestedTree = await searchFamilyTree(fatherSurname, fatherName, grandfatherSurname, grandfatherName);
        if (suggestedTree) {
          botResponse = `I found a family tree that matches your information: ${suggestedTree.name}`;
          onSuggestTree(suggestedTree);
        } else {
          botResponse = 'I could not find a matching family tree.';
        }
        setConversationState('initial');
        break;
      }
      default:
        botResponse = 'I am here to help you with your family tree. Please provide more details.';
        setConversationState('initial');
        break;
    }

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
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};
Chatbot.propTypes = {
  onSuggestTree: PropTypes.func.isRequired,
};

export default Chatbot;
