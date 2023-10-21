
//var express = require('express');
//var router = express.Router();
//const db = require('../../conf/database');

const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.topic.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)
  })
})


//HELLO BACK END TEAM 
// BELOW IS A LINK OF FAKE DATA 
// I USE THE FETCH API TO MAKE A CALL TO THAT DATA 
// YOU CAN SEE THE JSON IT WORKS WITH IF YOU TAKE THE LINK THEN GO TO IT

//IN OUR CASE REPLACE FETCH WITH A GET REQUEST LIKE WE DID BEFORE BUT 
// THAT GET REQUEST IS TO THE DATABASE
// IF IT DOESNT WORK RIGHT AWAY IT MIGHT BE SMTH LIKE http://localhost:3000/getData 
//BUT IDK 
// 

//fetch(`/tutors-router/`)
//  .then(res => res.json())
//  .then(data => {
//    users = data.map(user => {
//      const card = userCardTemplate.content.cloneNode(true).children[0]
//      const header = card.querySelector("[data-header]")
//      const body = card.querySelector("[data-body]")
//      header.textContent = user.name
//      body.textContent = user.topic
//      userCardContainer.append(card)
//      return { name: user.name, email: user.topic, element: card }
 //   })
//  })


//db.query('SELECT * from tutors', (err, result) => {
  //console.log(result);
  //});

//module.exports = router;
