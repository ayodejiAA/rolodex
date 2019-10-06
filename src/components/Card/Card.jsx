import React from 'react';
import './Card.css'

const Card = ({contact}) => {
return (
  <div className="card-container">
    <img alt="contact" src={`https://robohash.org/${contact.id}2?set=set5&size=180x180`}/>
    <h2>{contact.name}</h2>
    <p>{contact.email}</p>
    </div>
  )
}

export default Card;
