import React from "react";
import ContactCard from "./ContactCard";


const ContactList = (props) =>{

    console.log('ContactList', props.contacts)
    return (
        <div className="ui called list">
        Contact List
        {props.contacts.map(item => <ContactCard key={item.Id} contact = {item}/>)}
        </div>
    );
}

export default ContactList;