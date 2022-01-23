import React, {useEffect, useState} from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import './App.css';

function App() {
 const [contacts, setContacts] = useState([]);

 const addNewContact = (contact) => {
  setContacts([...contacts, contact]);
 }
  return (
    <div className='ui container'>
     <Header/>
     <AddContact UpdateContacts = {addNewContact}/>
     <ContactList contacts = {contacts}/>
    </div>
  );
}

export default App;
