import React, { useState } from "react";

const AddContact = (props) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");


    let contact = {
        ContactName: "",
        ContactEmail: "",
        Id: 0
    };
    const handleSubmit = (event) =>{
        event.preventDefault();
        if(email === "" && name === "") {
            alert("At least one of the fields is required");
        }
        else{
            contact = {
                ContactName: name,
                ContactEmail: email,
                Id: (Math.random()*100).toString()
            };
            props.UpdateContacts(contact);
            setEmail("");
            setName("");
        }
      }

    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>
                        Name:
                    <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                     placeholder="Name"
                    />
                    </label>
                </div>
                <div className="field">
                    <label>
                        Email:
                    <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                    />
                    </label>
                </div>
                <button className="ui button blue">Add</button>
            </form>
        </div>
    );
}

export default AddContact;