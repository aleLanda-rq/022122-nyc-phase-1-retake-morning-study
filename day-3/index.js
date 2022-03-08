const coverImage = document.querySelector('#cover-image')
const recipeName = document.querySelector('#recipe-name')
const directionsList = document.querySelector('#directions-list')
const comments = document.querySelector('.comments')

const URL = 'http://localhost:300/recipes'

function getRecipes() {
  fetch(URL)
  .then(res => res.json)
  .then(data => handleData(data))
}

function handleData(data) {
  const recipe = data
  coverImage.src = recipe.cover_image
  coverImage.alt = recipe.name
  addDirections(recipe.directions)
  addComments(recipe.comments)
}

function addDirections(directions) {
  directions.forEach(dir => {
    const li = document.createElement('li')
    directionsList.appendChild(li)
  })
}

function addComments(comments) {
  comments.forEach(comment => {
    const p = document.createElement('p')
    p.textContent = `"${comment.content}" by ${comment.author}`
    comments.appendChild(p)
  })
}

getRecipes()
