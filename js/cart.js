function addToCart(event) {

    const buttonAddToCart = event.target.closest('.button-add-cart')
  
    if (buttonAddToCart) {
  
      const card = event.target.closest('.card')
      const title = card.querySelector('.card-title-reg').textContent
      const cost = card.querySelector('.card-price').textContent
      const id = card.id
  
      const food = cart.find(item => item.id === id)
  
      if (food) {
        food.count ++
      } else {
        cart.push({
          id,
          title,
          cost,
          count: 1,
        })
      }
    }
  }

function renderCart() {
    cartModalBody.textContent = ''

    cart.forEach(({ id, title, cost, count }) => {

        const itemCart = `
        <div class="food-row">
					<span class="food-name">${title}</span>
					<strong class="food-price">${cost}</strong>
					<div class="food-counter">
						<button class="counter-button counter-minus" data-id="${id}">-</button>
						<span class="counter">${count}</span>
						<button class="counter-button counter-plus" data-id="${id}">+</button>
					</div>
				</div>
        `

        cartModalBody.insertAdjacentHTML('afterbegin', itemCart)

        const totalPrice = cart.reduce((result, item) => {
            return result + (parseFloat(item.cost) * item.count)
        }, 0)

        modalPriceTag.textContent = totalPrice + 'Р'

    })
  }

  function changeCount(event) {

    if (event.target.classList.contains('counter-button')) {
      const food = cart.find(item => {
        return item.id === event.target.dataset.id
      })

      if (event.target.classList.contains('counter-minus')) {
        food.count--
        if (food.count === 0) {
          cart.splice(cart.indexOf(food), 1)
        }
        renderCart()
      }

      if (event.target.classList.contains('counter-plus')) {
        food.count++
        renderCart()
      }
    }
  }