// export const getChatbotResponse = async (message) => {
//   // Simulate a chatbot response based on the user's message
//   return 'I am here to help you with your family tree. Please provide more details.';
// };

export const searchFamilyTree = async (fatherSurname, fatherName, grandfatherSurname, grandfatherName) => {
  // Simulate a search for family members and suggest a family tree
  const response = await fetch('http://loaclhost:4000/api/familytrees/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fatherSurname,
      fatherName,
      grandfatherSurname,
      grandfatherName,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    return data.tree;
  } else {
    return null;
  }
};