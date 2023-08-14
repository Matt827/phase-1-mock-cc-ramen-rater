//constants
const url = "http://localhost:3000/ramens"
const ramenMenu = document.querySelector("#ramen-menu")
const ramenform = document.querySelector("#new-ramen")

fetch(url)
.then(res => res.json())
.then(data => {
    data.forEach(renderRamenMenu)
})


function renderRamenMenu(ramen){
    let img = document.createElement('img')
    img.src = ramen.image
    ramenMenu.append(img)
    img.addEventListener('click', e => {
        displayRamenHero(ramen)
    })
}

function displayRamenHero(ramen){
    let detailImage = document.querySelector("#detail-image")
    let detailName = document.querySelector("#name")
    let detailRestaurant = document.querySelector("#restaurant")
    let detailRating = document.querySelector("#rating-display")
    let detailComment = document.querySelector("#comment-display")

    detailImage.src = ramen.image
    detailName.textContent = ramen.name
    detailRestaurant.textContent = ramen.restaurant
    detailRating.textContent = ramen.rating
    detailComment.textContent = ramen.comment
}

ramenform.addEventListener('submit', e => {
    e.preventDefault()

    let newName = e.target.name.value
    let newRestaurant = e.target.restaurant.value
    let newImage = e.target.image.value
    let newRating = e.target.rating.value
    let newComment = e.target['new-comment'].value

    const newRamen = {
        "name": newName,
        "image": newImage,
        "restaurant": newRestaurant,
        "rating": newRating,
        "comment": newComment
    }

    renderRamenMenu(newRamen)
})