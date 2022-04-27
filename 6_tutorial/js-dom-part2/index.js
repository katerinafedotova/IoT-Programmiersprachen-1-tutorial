//parent element - div id = cards-container
// only for ids
const cardsContainer = document.getElementById('cards-container')
// e.g. for class
// document.querySelector('your-class')

const createCards = () => {
    for (let i = 1; i < 6; i++) {
        // create element 
        const card = document.createElement('div')
        //add some content
        card.innerHTML = `<p>Element number ${i} </p>`
        // add styles - class
        card.classList.add('card')
        //append element
        cardsContainer.appendChild(card)
    }
}

createCards()
