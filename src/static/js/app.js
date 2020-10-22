import {list} from './list.js'


const palettesContainer = document.querySelector('.palettes');

Object.keys(list).forEach((item, index) => {
	let palett = list[item];
	palettesContainer.insertAdjacentHTML('beforeend', `
			<a class="palette" href="palette.html#${item}">
				<span class="palette__name">${palett['name']}</span>
				<div class="palette__colors"></div>
			</a>
		`);
	let paletteItems = document.querySelectorAll('.palette__colors');
	const max = palett.colors.length - 1;
	
	for(let i = 0; i < 5; i++){
		let random = getRandom(0, max)
		paletteItems[index].insertAdjacentHTML('beforeend', `
			<span class="palette__color" style="background-color:${palett['colors'][random]['hex']}"></span>
			`);	
	}
});

function getRandom(min, max) {
	return Math.floor(min + Math.random() * (max + 1 - min))
}