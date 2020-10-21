import {list} from './list.js'


const palettesContainer = document.querySelector('.palettes');

Object.keys(list).forEach((item, index) => {
	palettesContainer.insertAdjacentHTML('beforeend', `
			<a class="palette" href="palette.html#${item}">
				<span class="palette__name">${item}</span>
				<div class="palette__colors"></div>
			</a>
		`);
	let paletteItems = document.querySelectorAll('.palette__colors');

	const max = list[item].length - 1;
	
	for(let i = 0; i < 5; i++){
		let random = getRandom(0, max)
		paletteItems[index].insertAdjacentHTML('beforeend', `
			<span class="palette__color" style="background-color:${list[item][random]['hex']}"></span>
			`);	
	}
});

function getRandom(min, max) {
	return Math.floor(min + Math.random() * (max + 1 - min))
}