const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value)
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

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      header.textContent = user.name
      body.textContent = user.email
      userCardContainer.append(card)
      return { name: user.name, email: user.email, element: card }
    })
  })