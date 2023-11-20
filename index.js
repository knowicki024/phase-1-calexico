// Write your code here...

const menuItemsDivElement = document.getElementById('menu-items')
const dishImageElement = document.getElementById('dish-image')
const dishNameH3Element = document.getElementById('dish-name')
const dishDescriptionElement = document.getElementById('dish-description')
const dishPriceElement = document.getElementById('dish-price')


//Deliverable 1
fetch('http://localhost:3000/menu')
.then(response => response.json())
.then(menuItems => {
    menuItems.forEach(menuItem => {
        const spanElement = document.createElement('span')
        spanElement.textContent = menuItem.name
        menuItemsDivElement.appendChild(spanElement)

        //Deliverable 3
        spanElement.addEventListener('click', () => {
            displayMenuItemDetails(menuItem)
        })
    })

    //Deliverable 2
    displayMenuItemDetails(menuItems[0])
})

function displayMenuItemDetails(menuItem){
    
    dishImageElement.src = menuItem.image
    dishNameH3Element.textContent = menuItem.name
    dishDescriptionElement.textContent = menuItem.description
    dishPriceElement.textContent = "$" + menuItem.price
}
//Deliverable 4
const cartFormElement = document.getElementById('cart-form')
cartFormElement.addEventListener('submit', (event) => {
    event.preventDefault()

    const cartAmountInputElement = document.getElementById('cart-amount')
    const numberInCartSpanElement = document.getElementById('number-in-cart')
    const sum = Number(numberInCartSpanElement.textContent) + cartAmount
    numberInCartSpanElement.textContent = sum
})









// const restaurantMenu = document.getElementById("menu-items")
// let cartItemsCount = {}


// document.addEventListener('DOMContentLoaded', () => {
// fetch('http://localhost:3000/menu')
// .then(response => response.json())
// .then(menu => {
//     displayFoodDetails(menu[0])

//     menu.forEach(food => {
//         addFoodImageToRestaurantMenu(food)
//     })
// })
// })

// function addFoodImageToRestaurantMenu(food){
//     const imgElement = document.createElement('img')
//     imgElement.src = food.image 
//     imgElement.addEventListener('click', () => {
//         displayFoodDetails(food)
//     })
//     restaurantMenu.appendChild(imgElement)
// }

// function displayFoodDetails(food){
//     const dishImage = document.getElementById("dish-image")[0]
//     dishImage.src = food.image
//     const dishName = document.getElementById("dish-name")[0]
//     dishName.textContent = food.name 
//     const dishDescription = document.getElementById("dish-description")
//     dishDescription.textContent = food.description
//     const dishPrice = document.getElementById("dish-price")
//     dishPrice.textContent = food.price
// }
