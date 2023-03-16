import {getRepositories} from '../api/getRepositories'

const form = document.querySelector('.search')

const submitForm = (event) => {
  event.preventDefault()
  getRepositories(form['search-bar'].value)

  // console.log(form['search-bar'].value)
}

form.onsubmit = submitForm