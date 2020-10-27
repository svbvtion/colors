import {list} from './list.js'


const palettesContainer = document.querySelector('.palettes');

let palettesHTML = '';

Object.keys(list).forEach((item, index) => {
	let palett = list[item];

	palettesHTML += `
			<a class="palette" href="palette.html#${item}">
				<span class="palette__name">${palett['name']}</span>
				<div class="palette__colors">`;
	for(let x = 0; x < 5; x++){
		let decorHTML = `<span class="palette__color" style="background-color:${palett['colors'][x]['hex']}"></span>`
		if(x == 4){
			palettesHTML += `${decorHTML}</div></a>`
		} else {
			palettesHTML += decorHTML
		}
	}
});
palettesContainer.insertAdjacentHTML('beforeend', palettesHTML);
function getRandom(min, max) {
	return Math.floor(min + Math.random() * (max + 1 - min))
}