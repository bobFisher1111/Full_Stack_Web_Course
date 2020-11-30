import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

// function will be passed into the map() method
function createCard(contact) {
  // must include an unique ID for the mapping called key, we already have value called id from contacts
  return <Card 
    key={contact.id} // this will remove a warning
    name={contact.name}
    img={contact.imgURL}
    tel={contact.phone}
    email={contact.email}
    id={contact.id}
  />
}

// Using the map function to loop through Card, passing in function
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar
        img="https://i.kinja-img.com/gawker-media/image/upload/s--AwaSX1yO--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/198kxsa1st1aojpg.jpg"
      />
      {contacts.map(createCard)}
    </div>
  );
}

// old way of doing, now using map method: in the div above
/*
  <Card
    name={contacts[0].name}
    img={contacts[0].imgURL}
    tel={contacts[0].phone}
    email={contacts[0].email}
  />
  <Card
    name={contacts[1].name}
    img={contacts[1].imgURL}
    tel={contacts[1].phone}
    email={contacts[1].email}
  />
  <Card
    name={contacts[2].name}
    img={contacts[2].imgURL}
    tel={contacts[2].phone}
    email={contacts[2].email}
  />
*/

export default App;
