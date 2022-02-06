import React from "react";
import ContactCard from "./ContactCard";


const ContactList = (props) =>{
    return (
        <div className="ui called list">
        Contact List
        {props.contacts.map(item => <ContactCard key={item.Id} contact = {item}/>)}
        </div>
    );
}

export default ContactList;