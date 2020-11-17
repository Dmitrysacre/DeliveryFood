function createCardProduct(products) {

    const { description, id, image, name, price } = products

    const card = document.createElement('div')
    card.className = 'card'
    card.id = id
    card.innerHTML = `
                          <img src="${image}" alt="image" class="card-image"/>
                          <div class="card-text">
                              <div class="card-heading">
                                  <h3 class="card-title card-title-reg">${name}</h3>
                              </div>
                              <div class="card-info">
                                  <div class="ingredients">
                                  ${description}
                                  </div>
                              </div>
                              <div class="card-buttons">
                                  <button class="button button-primary button-add-cart">
                                      <span class="button-card-text">В корзину</span>
                                      <span class="button-cart-svg"></span>
                                  </button>
                                  <strong class="card-price card-price-bold">${price} ₽</strong>
                              </div>
                          </div>
    `
  
    cardsMenu.insertAdjacentElement("beforeend", card)
  }