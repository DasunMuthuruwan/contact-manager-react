import React from 'react';
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactLict from './components/ContactList'

function App() {
  const contacts = [
    {
      id: 1,
      name: "Dasun",
      email: "dasun@mylinex.com"
    },
    {
      id: 2,
      name: "Gaya",
      email: "gaya2@gmail.com"
    }
  ]
  return (
    <div className='ui container'>
      <Header />
      <AddContact />
      <ContactLict contacts = { contacts } />
    </div>
  );
}

export default App;
