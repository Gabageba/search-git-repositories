import {addFormError} from '../scripts/form/formError'

export const serverErrorHandler = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error
  }
}

export const formErrorHandler = (event) => {
  const target = event.target || event
  const value = target.value

  if (!value) {
    addFormError(target, 'Поисковая строка не должна быть пустой')
    return false
  }

  if (value.length >= 255) {
    addFormError(target, 'Длинна поискового запроса не должна превышать 255 символов')
    return false
  }

  return true
}

