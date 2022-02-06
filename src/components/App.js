import React, {useEffect, useState} from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import './App.css';

function App() {

 const LOCAL_STORAGE_KEY = 'contacts';
 const [contacts, setContacts] = useState([]);

 const addNewContact = (contact) => {
  setContacts([...contacts, contact]);
 };

useEffect(() => {
   const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
   if(retrievedContacts) setContacts(retrievedContacts);
 }, []);

 useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
 }, [contacts]);

 return (
    <div className='ui container'>
     <Header/>
     <AddContact UpdateContacts = {addNewContact}/>
     <ContactList contacts = {contacts}/>
    </div>
  );
}
export default App;
