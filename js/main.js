// Selectors

const logo = document.querySelector('.logo')
const modal = document.querySelector('.modal')

// Header Selectors

const buttonAuth = document.querySelector('.button-auth')
const buttonOut = document.querySelector('.button-out')
const userName = document.querySelector('.user-name')

// Auth Selectors

const modalAuth = document.querySelector('.modal-auth')
const closeAuth = document.querySelector('.close-auth')
const logInForm = document.querySelector('#logInForm')
const buttonLogin = document.querySelector('.button-login')
const authLoginInput = document.querySelector('#login')

const containerPromo = document.querySelector('.container-promo')

// Body Selectors

const cardsRestaurants = document.querySelector('.cards-restaurants')
const restaurants = document.querySelector('.restaurants')
const menu = document.querySelector('.menu')
const cardsMenu = document.querySelector('.cards-menu')

const cartButton = document.querySelector('#cart-button')
const close  = document.querySelector('.close')

const restaurantTitle = document.querySelector('.restaurant-title')

// Cart Selectors

const cartModalBody = document.querySelector('.modal-body')
const modalPriceTag = document.querySelector('.modal-pricetag')
const buttonClearCart = document.querySelector('.clear-cart')

// Data

let loginValue = localStorage.getItem('user')

const partners = getData('./db/partners.json')

const cart = []

// Functions 

const toggleModal = () => modal.classList.toggle('is-open')

const toggleModalAuth = () => modalAuth.classList.toggle("is-open")

const returnMain = () => {
    containerPromo.classList.remove('hide')
    restaurants.classList.remove('hide')
    menu.classList.remove('hide')
  }

async function getData(url) {

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Error')
  }

  return await response.json()
}

const showProducts = event => {

  if (loginValue) {

    const cardRestaurant = event.target.closest('.card-restaurant')

    restaurantTitle.textContent = cardRestaurant.dataset.name

    if (cardRestaurant) {

      containerPromo.classList.add('hide')
      restaurants.classList.add('hide')
      menu.classList.remove('hide')
      cardsMenu.textContent = ''

      getData(`./db/${cardRestaurant.dataset.products}`).then(data => {
        data.forEach(createCardProduct)
      })
    }
  } else {
    toggleModalAuth()
  }
}

const isAuth = () => {
  if (loginValue) authorized()
  else unauthorized()
}

partners.then(data => {
  data.forEach(createCardRestaurant)
})

function init() {

  cardsRestaurants.addEventListener('click', showProducts)

  cartButton.addEventListener('click', () => {
    renderCart()
    toggleModal()
  })

  buttonClearCart.addEventListener('click', () => {
    cart.length = 0
    renderCart()
  })

  cartModalBody.addEventListener('click', changeCount)

  close.addEventListener('click', toggleModal)

  logo.addEventListener('click', returnMain)

  cardsMenu.addEventListener('click', addToCart)

  isAuth()

  new Swiper('.swiper-container', {
    loop: true,
    slidePerView: 1,
    //autoplay: true,
  })
}

// Calls

init()