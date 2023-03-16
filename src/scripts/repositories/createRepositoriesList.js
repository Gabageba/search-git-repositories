import {createCard} from './createCard'

const notFound = () => {
  const repositories = document.querySelector('.repositories')
  const error = document.createElement('span')
  error.className = 'repositories__not-found'
  error.innerHTML = 'Ничего не найдено'

  repositories.append(error)
}

export const createRepositoriesList = (response) => {
  const {total_count, items} = response
  if (total_count === 0) {
    notFound()
  } else {
    for (const item of items) {
      createCard(item)
    }
  }
}