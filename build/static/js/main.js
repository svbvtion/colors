import{list}from"./list.js";let curentRef=document.location.href.split("#"),curentScheme=curentRef[curentRef.length-1];function createCards(t){let e=list[t],c=e.colors;const r=document.querySelector(".header__body"),o=document.querySelector(".cards__body"),n=document.querySelector("body"),l=document.querySelector(".modal"),a=document.querySelector(".modal__text"),s=document.querySelectorAll(".select__box");let d="hex";r.insertAdjacentHTML("beforeend",`\n\t\t<span class="header__title">${e.name}</span>\n\t\t`),c.forEach(t=>{o.insertAdjacentHTML("beforeend",`\n\t\t<div class="card">\n\t\t\t<div class="card__color" style=background-color:${t[d]}>\n\t\t\t\t<div class="card__appeal">select</div>\n\t\t\t</div>\n\t\t\t<span class="card__text">${t[d]}</span>\n\t\t</div>\n\t\t`)});const i=document.querySelectorAll(".card"),u=(document.querySelectorAll(".card__color"),document.querySelectorAll(".card__text"));i.forEach(t=>{t.addEventListener("click",(function(e){let c=t.querySelector(".card__text").textContent;navigator.clipboard.writeText(c),l.style.backgroundColor=c,l.classList.toggle("active"),a.textContent=c,n.style.marginRight=window.innerWidth-n.offsetWidth+"px",n.classList.toggle("lock"),setTimeout((function(){l.classList.toggle("active"),n.style.marginRight=0,n.classList.toggle("lock")}),500)}))}),s.forEach(t=>{t.addEventListener("change",(function(t){d=t.target.value,u.forEach((t,e)=>{t.textContent=c[e][d]})}))})}createCards(curentScheme);export{createCards};