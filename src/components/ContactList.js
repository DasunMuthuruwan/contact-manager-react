import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

    const deleteClickHandler = (id) => {
        props.getContactId(id)
    }

    const renderContactList = props.contacts.map((contact) => {
        return (<ContactCard contacts={contact} key={contact.id} clickHandler={deleteClickHandler}></ContactCard>)
    })
    
    return (
        <div className="ui celled list">{renderContactList}</div>
    )
}

export default ContactList;