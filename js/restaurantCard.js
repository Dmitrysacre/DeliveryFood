function createCardRestaurant(restaurant) {

    const { image, kitchen, name, price, products, stars, time_of_delivery: timeOfDelivery } = restaurant

    const card = `
    <a class="card card-restaurant" data-products="${products}" data-name="${name}">
                          <img src=${image} alt="image" class="card-image"/>
                          <div class="card-text">
                              <div class="card-heading">
                                  <h3 class="card-title">${name}</h3>
                                  <span class="card-tag tag">${timeOfDelivery} мин</span>
                              </div>
                              <div class="card-info">
                                  <div class="rating">
                                      ${stars}
                                  </div>
                                  <div class="price">От ${price} </div>
                                  <div class="category">${kitchen}</div>
                              </div>
                          </div>
                      </a>
    `
    cardsRestaurants.insertAdjacentHTML('afterbegin', card)
  }