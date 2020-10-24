import {list} from './list.js'

let curentRef = document.location.href.split('#');
let curentScheme = curentRef[curentRef.length - 1];

createCards(curentScheme)


function createCards(cardName) {

	let curentPalette = list[cardName]
	let colorList = curentPalette['colors'];

	document.title += `| ${curentPalette.name}`
	const headerBody = document.querySelector('.header__body');
	const cardsContainer = document.querySelector('.cards__body');
	const body = document.querySelector('body');
	const modal = document.querySelector('.modal');
	const modalText = document.querySelector('.modal__text');

	const select = document.querySelectorAll('.select__box');

	let curentColorFormat = 'hex';

	headerBody.insertAdjacentHTML('beforeend', `
		<span class="header__title">${curentPalette['name']}</span>
		`);


	colorList.forEach(color => {
		cardsContainer.insertAdjacentHTML('beforeend', `
		<div class="card">
			<div class="card__color" style=background-color:${color[curentColorFormat]}>
				<div class="card__appeal">select</div>
			</div>
			<span class="card__text">${color[curentColorFormat]}</span>
		</div>
		`);
	});

	const cardList = document.querySelectorAll('.card');

	const cardColor = document.querySelectorAll('.card__color');
	const cardText = document.querySelectorAll('.card__text');


	cardList.forEach(card => {
		card.addEventListener('click', function(e) {
			let curentColor = card.querySelector('.card__text').textContent;
			navigator.clipboard.writeText(curentColor)

			modal.style.backgroundColor = curentColor;
			modal.classList.toggle('active')
			modalText.textContent = curentColor;

			body.style.marginRight = window.innerWidth - body.offsetWidth + 'px'
			body.classList.toggle('lock')
			
			setTimeout(function() {
				modal.classList.toggle('active')
				body.style.marginRight = 0
				body.classList.toggle('lock')

			}, 500);
			
		});
	});


	select.forEach(item => {
		item.addEventListener('change', function(e) {
			curentColorFormat = e.target.value;
			cardText.forEach((i, index) => {
				i.textContent = colorList[index][curentColorFormat]
			});
		});
	})

	
}


export {createCards}