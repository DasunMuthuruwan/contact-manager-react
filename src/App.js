import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactLict from './components/ContactList'

function App() {
  const LOCAL_STORAGE_KEY = "contact"
  const [contacts, setContacts] = useState([])

  const addContactHandler = (contact) => {
    setContacts([...contacts, {id: uuidv4(), ...contact}]);
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  }

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactLict contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;