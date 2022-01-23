import React from "react";

const ContactCard = ({contact}) => {


    const {ContactName, ContactEmail, Id} = contact;

    console.log(ContactEmail);

    return (
        <div className="item">
            <div className="content">
                <div className="header"> {ContactName} </div>
                <div>{ContactEmail}</div>
                <div>{Id}</div>
            </div>
            <i 
            className="trash alternate outline icon"
            style={{color: "red", marginTop: '7px'}}></i>
        </div>
    );
}

export default ContactCard;