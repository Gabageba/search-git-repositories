export const addLoader = () => {
  const repositories = document.querySelector('.repositories')
  const loader = document.createElement('span')
  loader.className = 'loader'
  repositories.append(loader)
}

export const removeLoader = () => {
  const loader = document.querySelector('.loader')
  loader.remove()
}