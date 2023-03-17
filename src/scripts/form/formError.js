export const addFormError = (target, errorText) => {
  const currentForm = target.closest('form')
  const hasError = currentForm.querySelector('.search__error_text')
  if (hasError) return

  const searchBlock = currentForm.querySelector('.search__block')

  const error = document.createElement('div')
  error.className = 'search__error_text'
  error.innerHTML = errorText
  searchBlock.append(error)

  target.classList.add('search__error')
}

export const removeFormError = (event) => {
  const target = event.target || event
  const currentForm = target.closest('form')

  const error = currentForm.querySelector('.search__error_text')
  if (!error) return

  error.remove()

  target.classList.remove('search__error')
}