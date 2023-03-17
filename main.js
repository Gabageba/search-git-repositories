(()=>{"use strict";const e=(e,s)=>{const t=e.closest("form");if(t.querySelector(".search__error_text"))return;const r=t.querySelector(".search__block"),n=document.createElement("div");n.className="search__error_text",n.innerHTML=s,r.append(n),e.classList.add("search__error")},s=e=>{const s=e.target||e,t=s.closest("form").querySelector(".search__error_text");t&&(t.remove(),s.classList.remove("search__error"))},t=s=>{const t=s.target||s,r=t.value;return r?!(r.length>=255&&(e(t,"Длинна поискового запроса не должна превышать 255 символов"),1)):(e(t,"Поисковая строка не должна быть пустой"),!1)},r=e=>{const s=new Date(e);return`${s.getDate()}.${s.getMonth()}.${s.getFullYear()}`},n=e=>{const s=document.querySelector(".repositories"),t=`\n   <a href=${e.owner.html_url} target="_blank" class="repositories__owner">\n     <img width="100" height="100"  src=${e.owner.avatar_url} alt=${e.owner.login}>\n     <span>${e.owner.login}</span>\n   </a>\n   <div class="repositories__repo">\n     <a href=${e.html_url} target="_blank" class="repositories__name">${e.name}</a>\n     <div class="repositories__description">${e.description||"Нет описания"}</div>\n     <div class="repositories__sub-info">\n       <span class="repositories__sub-info_title">Язык: </span>\n       <span class="repositories__sub-info_content">${e.language||"Неизвестный язык"}</span>\n     </div>\n     <div class="repositories__sub-info">\n       <span class="repositories__sub-info_title">Дата создания: </span>\n       <span class="repositories__sub-info_content">${r(e.created_at)||"Неизвестна"}</span>\n     </div>\n     <div class="repositories__sub-info">\n       <span class="repositories__sub-info_title">Дата обновления: </span>\n       <span class="repositories__sub-info_content">${r(e.updated_at||"Неизвестна")}</span>\n     </div>\n   </div>\n  `,n=document.createElement("div");n.className="repositories__item",n.innerHTML=t,s.append(n)},o=e=>{const s=`https://api.github.com/search/repositories?q=${e}&per_page=10`;document.querySelector(".repositories").innerHTML="",(()=>{const e=document.querySelector(".repositories"),s=document.createElement("span");s.className="loader",e.append(s)})(),fetch(s).then((e=>(e=>{if(e.status>=200&&e.status<300)return e;{const s=new Error(e.statusText);throw s.response=e,s}})(e))).then((e=>e.json())).then((e=>(e=>{const{total_count:s,items:t}=e;if(0===s)(()=>{const e=document.querySelector(".repositories"),s=document.createElement("span");s.className="repositories__not-found",s.innerHTML="Ничего не найдено",e.append(s)})();else for(const e of t)n(e)})(e))).catch((e=>{console.error(e)})).finally((()=>{document.querySelector(".loader").remove()}))},a=document.querySelector(".search"),i=a["search-bar"];a.onsubmit=e=>{e.preventDefault(),t(i)&&o(i.value)},i.addEventListener("blur",t),i.addEventListener("focus",s),i.addEventListener("input",(e=>{""!==e.target.value&&s(e.target)}))})();
//# sourceMappingURL=main.js.map