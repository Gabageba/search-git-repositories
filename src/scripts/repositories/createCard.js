import {dateConverter} from '../../utils/dateConverter'

export const createCard = (item) => {
  const repositories = document.querySelector('.repositories')
  const cardHTML = `
   <a href=${item.owner.html_url} target="_blank" class="repositories__owner">
     <img width="100" height="100"  src=${item.owner.avatar_url} alt=${item.owner.login}>
     <span>${item.owner.login}</span>
   </a>
   <div class="repositories__repo">
     <a href=${item.html_url} target="_blank" class="repositories__name">${item.name}</a>
     <div class="repositories__description">${item.description || 'Нет описания'}</div>
     <div class="repositories__sub-info">
       <span class="repositories__sub-info_title">Язык: </span>
       <span class="repositories__sub-info_content">${item.language || 'Неизвестный язык'}</span>
     </div>
     <div class="repositories__sub-info">
       <span class="repositories__sub-info_title">Дата создания: </span>
       <span class="repositories__sub-info_content">${dateConverter(item.created_at) || 'Неизвестна'}</span>
     </div>
     <div class="repositories__sub-info">
       <span class="repositories__sub-info_title">Дата обновления: </span>
       <span class="repositories__sub-info_content">${dateConverter(item.updated_at || 'Неизвестна')}</span>
     </div>
   </div>
  `

  const card = document.createElement('div')
  card.className = 'repositories__item'
  card.innerHTML = cardHTML

  repositories.append(card)
}