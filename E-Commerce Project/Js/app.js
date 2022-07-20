

console.log('its working!!')
const hamburger = document.querySelector('.hamburger')
const exit = document.querySelector('#exit')
const menu = document.querySelector('.mobile-container')
const basket = document.querySelector('.basket')
const closeCart = document.querySelector('.close-cart')
const shoppingCart = document.querySelector('.shopping-cart')
const favouritesBtn = document.querySelector('.favouritesBtn')
const favouriteList = document.querySelector('.favourite-list')
const closeFav = document.querySelector('.close-fav')
const favouritesUL = document.getElementById('favourites')
const cartUL = document.getElementById('cart')
const featureCard = document.getElementById('feature-card')
const saleBtn = document.getElementById('saleBtn')
const shopBtn = document.getElementById('shopBtn')
const jeans = document.getElementById('jeans')
const knitwear = document.getElementById('knitwear')
const jackets = document.getElementById('jackets')
const tshirts = document.getElementById('tshirts')
const shoes = document.getElementById('shoes')
const sale = document.getElementById('sale')





hamburger.addEventListener('click', function () {
    menu.classList.add('show')
    gsap.from('.menu-list', { opacity: 0, duration: 1, x: -100 })
})

exit.addEventListener('click', function () {
    menu.classList.remove('show')
})

var addToFavouritesBtn = document.getElementsByClassName('addFav')
for (var i = 0; i < addToFavouritesBtn.length; i++) {
    var button = addToFavouritesBtn[i]
    button.addEventListener('click', addToFavouriteClicked)
}

var addToBasketBtn = document.getElementsByClassName('add')
for (var i = 0; i < addToBasketBtn.length; i++) {
    var cartButton = addToBasketBtn[i]
    cartButton.addEventListener('click', addItemToBasketClicked)
}

function addToFavouriteClicked(event) {
    var button = event.target
    var favItem = button.parentElement.parentElement
    var description = favItem.getElementsByClassName('product-desc')[0].innerText
    var price = favItem.getElementsByClassName('product-price')[0].innerText
    var imgSrc = favItem.getElementsByClassName('product-img')[0].src
    var favIcon = favItem.getElementsByClassName('addFav')[0]

    console.log(description, price, imgSrc)
    favIcon.classList.add('show')

    addItemToFavouritesList(description, price, imgSrc)

}

function addItemToFavouritesList(description, price, imgSrc) {
    var favouriteItem = document.createElement('div')
    favouriteItem.classList.add('fav')
    favouriteItem.innerHTML = ` <img src="${imgSrc}">
     <h3 class="fav-desc">${description}</h3>
     <p class="fav-price">${price}</p>`

    favouritesUL.appendChild(favouriteItem)

}

function addItemToBasketClicked(event) {
    var cartButton = event.target
    var bagItem = cartButton.parentElement
    var description = bagItem.getElementsByClassName('product-desc')[0].innerText
    var price = bagItem.getElementsByClassName('product-price')[0].innerText
    var imgSrc = bagItem.getElementsByClassName('product-img')[0].src
    var cartIcon = bagItem.getElementsByClassName('add')[0]

    cartIcon.classList.add('show')

    addItemToBasket(description, price, imgSrc)

    localStorage.setItem("description", description)
    localStorage.setItem("price", price)
    localStorage.setItem("imgSrc", imgSrc)
}

function addItemToBasket(description, price, imgSrc) {
    var cartItem = document.createElement('div')
    cartItem.classList.add('cart')
    cartItem.innerHTML = ` <img src="${imgSrc}">
    <h3 class="fav-desc">${description}</h3>
    <p class="fav-price">${price}</p>`

    cartUL.appendChild(cartItem)
}



jeans.onclick = function(){
    window.open("../E-Commerce Project/mens.html","_self")
}
jackets.onclick = function(){
    window.open("../E-Commerce Project/womens.html","_self")
}
tshirts.onclick = function(){
    window.open("../E-Commerce Project/mens.html","_self")
}
knitwear.onclick = function(){
    window.open("../E-Commerce Project/mens.html","_self")
}
shoes.onclick = function(){
    window.open("../E-Commerce Project/mens.html","_self")
}
sale.onclick = function(){
    window.open("../E-Commerce Project/womens.html","_self")
}


saleBtn.onclick = function() {
    window.open("../E-Commerce Project/womens.html","_self")
}
shopBtn.onclick = function() {
    window.open("../E-Commerce Project/womens.html","_self")
}

featureCard.onclick = function() {
    window.open("../E-Commerce Project/womens.html","_self")
}


basket.addEventListener('click', function () {
    shoppingCart.classList.add('show')
})

closeCart.addEventListener('click', function () {
    shoppingCart.classList.remove('show')
})

favouritesBtn.addEventListener('click', function () {
    favouriteList.classList.add('show')
})

closeFav.addEventListener('click', function () {
    favouriteList.classList.remove('show')
})

