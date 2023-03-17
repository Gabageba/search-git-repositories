import {getRepositories} from '../api/getRepositories'
import {formErrorHandler} from '../../utils/errorHandlers'
import {removeFormError} from './formError'

const form = document.querySelector('.search')
const searchBar = form['search-bar']

const submitForm = (event) => {
  event.preventDefault()
  if (formErrorHandler(searchBar)) {
    getRepositories(searchBar.value)
  }
}

form.onsubmit = submitForm

searchBar.addEventListener('blur', formErrorHandler)
searchBar.addEventListener('focus', removeFormError)
searchBar.addEventListener('input', (event) => {
  if (event.target.value !== '') {
    removeFormError(event.target)
  }
})