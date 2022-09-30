import React from "react";
import user from '../assets/images/user.png'

const ContactCard = (props) => {
    const { id, name, email } = props.contacts;
    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
                <div className="header">{name}</div>
                <div className="description">{email}</div>
            </div>
            <i className="trash alternate outline icon"
             style={{color: "red", marginTop: "7px",cursor:"pointer"}}
             onClick={() => props.clickHandler(id)}
             ></i>
        </div>
    )
}

export default ContactCard;