const url = 'https://dog.ceo/api'

function getBreeds() {
  return fetch(`${url}/breeds/list/all`)
    .then(res => res.json())
    .then(res => res.message)
}

function getImagePet(breed) {
    return fetch(`${url}/breed/${breed}/images/random`)
      .then(res => res.json())
      .then(res => res.message)
  }
  

export default {
    getBreeds,
    getImagePet
}