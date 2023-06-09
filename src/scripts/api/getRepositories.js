import {API_URL, LIMIT} from '../../utils/const'
import {serverErrorHandler} from '../../utils/errorHandlers'
import {createRepositoriesList} from '../repositories/createRepositoriesList'
import {clearRepositoriesList} from '../repositories/clearRepositoriesList'
import {addLoader, removeLoader} from '../repositories/loader'

export const getRepositories = (repositoryName) => {
  const url = `${API_URL}/search/repositories?q=${repositoryName}&per_page=${LIMIT}`
  clearRepositoriesList()
  addLoader()

  fetch(url)
    .then(response => {
      return serverErrorHandler(response)
    })
    .then(res => res.json())
    .then(result => createRepositoriesList(result))
    .catch(err => {
      console.error(err)
    })
    .finally(() => removeLoader())
}