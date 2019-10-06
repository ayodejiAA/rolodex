import React from 'react';
import Card from '../Card/Card'
import './CardList.css'

const CardList = ({contacts}) => {
  return (
  <div className="card-list">
     {contacts.map((contact) => <Card key={contact.id} contact={contact}/> )}
  </div>
  )
}

export default CardList;
