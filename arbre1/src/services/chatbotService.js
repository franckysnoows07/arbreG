export const getChatbotResponse = async (message) => {
    // Simulate a chatbot response based on the user's message
    // You can replace this with an actual API call to a chatbot service
    if (message.toLowerCase().includes('father')) {
      return 'What is your father\'s name?';
    } else if (message.toLowerCase().includes('mother')) {
      return 'What is your mother\'s name?';
    } else {
      return 'I am here to help you with your family tree. Please provide more details.';
    }
  };