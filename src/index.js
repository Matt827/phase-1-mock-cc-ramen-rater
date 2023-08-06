const baseURl = "http://localhost:3000/ramens"
const ramenMenuDiv = document.querySelector('#ramen-menu')
const ramenDetailDiv = document.querySelector('#ramen-detail')
const newRamenForm = document.querySelector('#new-ramen')

fetch(`${baseURl}`)
.then(response => response.json())
.then(ramen => {
    ramen.forEach(renderRamen)
})

function renderRamen(ramen) {
    let ramenImage = document.createElement('img')
    ramenImage.src = ramen.image
    ramenMenuDiv.append(ramenImage)
    ramenImage.addEventListener('click', () => {
        displayRamenDetails(ramen)
    })
}

function displayRamenDetails(ramen) {
    let ramenName = document.getElementById("detail-name")
    let ramenRest = document.getElementById("detail-rest")
    let ramenDetailImage = document.getElementById("detail-image")
    let ramenRating = document.getElementById("rating-display")
    let ramenComment = document.getElementById("comment-display")

    ramenName.innerText = ramen.name
    ramenRest.innerText = ramen.restaurant
    ramenDetailImage.src = ramen.image
    ramenRating.innerText = ramen.rating
    ramenComment.innerText = ramen.comment
}

newRamenForm.addEventListener('submit', e => {
    e.preventDefault()
    let newRamenName = document.getElementById("new-name").value
    let newRamenRestaurant = document.getElementById("new-restaurant").value
    let newRamenImage = document.getElementById("new-image").value
    let newRamenRating = document.getElementById("new-rating").value
    let newRamenComment = document.getElementById("new-comment").value

    const newRamen = {
        "name": newRamenName,
        "image": newRamenImage,
        "restaurant": newRamenRestaurant,
        "rating": newRamenRating,
        "comment": newRamenComment
    }

    renderRamen(newRamen)

})


