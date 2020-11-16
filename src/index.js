

document.addEventListener("DOMContentLoaded", function(){
    renderHeader()
    renderCard()
    renderButton()
    renderPad()
    renderBodyDesign()
    renderCollectionHeader()
    renderCollectionCards()
    renderPublicGoods()
  })

function renderHeader() {
    let header = document.querySelector(".header")
    header.innerHTML = `
    <h1 id="introducing">Introducing</h1>
    <h1 id="introducing-bio">The first 100% <br> biodegradable <br> bamboo maxi pad.</h1>
    <h3>The most eco-friendly menstrual <br> care in the world is here.<h3>
    `
}
function renderButton() {
  let buttonContainer = document.querySelector(".button-container")
  buttonContainer.innerHTML = `
  <button id="shop-now">Shop Now</button>
  `
}

function renderCard() {
  let card = document.querySelector(".card")
  card.innerHTML = `
  <h1 class="card-text">We found that <br> the best care could <br> also be the most <br> sustainable.</h1>
  <p id="blurb">We started by using organic <br> bamboo because it grows faster <br> and requires less water to produce <br> than cotton or rayon fibers. It's also <br> softer and 15% more absorbent.</p>
  `
}

function renderPad() {
  let padContainer = document.querySelector(".pad-container")
  padContainer.innerHTML = `
  <h1 id="pad-header">No plastics <br> or synthetics.</h1>
  <p id="pad-text">We got rid of plastic and <br> synthetic components <br> that can sit in landfills <br> for up to 800 years. Even <br> our wrapper is 100% <br> biodegradable.</p>
  `
}

function renderBodyDesign() {
  let bodyDesignContainer = document.querySelector(".body-design-container")
  bodyDesignContainer.innerHTML = `
  <h1 id="designed-header">Designed<br>for your body.</h1>
  <p id ="designed-text">Feather-light and ultra thin.
  <br>
  Super soft for sensitive skin.
  <br>
  Antimicrobial and hypoallergenic.
  <br>
  No synthetic fibers or elemental chlorine.
  </p>
  `
}

function renderCollectionHeader() {
  let collection = document.querySelector(".the-collection")
  collection.innerHTML = `
  <h1>The Collection</h1>
  `
}

function renderCollectionCards() {
  let collectionCardsContainer = document.querySelector(".collection-cards")
  collectionCardsContainer.innerHTML = `
  <img class="image" src="./images/bamboo-regular-maxi-pad.jpg">
  <p class="image-name">Bamboo Regular Pad</p>
  <h1 class="image-price">$3.00</h1>
  <img class="image" src="./images/bamboo-super-maxi-pad.jpg">
  <p class="image-name">Bamboo Super Pad</p>
  <h1 class="image-price">$3.00</h1>
  <img class="image" src=".images/bamboo-overnight-pads.jpg">
  <p class="image-name">Bamboo Overnight Pad</p>
  <h1 class="image-price">$3.00</h1>
  <img class="image" src="./images/bamboo-panty-liners.jpg">
  <p class="image-name">Bamboo Panty Liner</p>
  <h1 class="image-price">$3.00</h1>
  `
}

function renderPublicGoods() {
  let publicGoodsContainer = document.querySelector(".public-goods")
  publicGoodsContainer.innerHTML = `
  <h1 id="public-goods-header">New to Public Goods?</h1>
  <p id="public-goods-text">We're committed to making healthier, better
  <br>
  choices easy and affordable to all. Good-for-
  <br>
  you, eco-friendly and beautifully designed<br>
  essentials, all in one place and at ultra low prices.</p>
  `
}


