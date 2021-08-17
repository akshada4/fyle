const focusChangeLabel = (e) => {
	const label = e.target.nextElementSibling;
	label.textContent = label.textContent.split('*')[0];
	label.setAttribute('style', 'transform: translateY(-100%);');
}

const focusOutChangeLabel = (e) => {
	const label = e.target.nextElementSibling;
	if(!e.target.value) {
		label.textContent += '*' ;
		label.setAttribute('style', 'transform: translateY(-10%);');
	}
}

const displayForm = () => {
	const form = document.querySelector('.overlay');
	form.setAttribute('style', 'display: block');
}

const getNewCard = (e) => {
	const card = e.currentTarget;
	const newCard = card.querySelector('.hidden-card');
	return newCard;
}

const displayHiddenCard = (e) => {
	const hiddenCard = getNewCard(e);
	hiddenCard.setAttribute('style', 'display:block')
}

const hideHiddenCard = (e) => {
	const displayedCard = getNewCard(e);
	displayedCard.setAttribute('style','display:none');
}

const addCardImg = (e) => {
	const card = e.currentTarget;
	const newCard= card.querySelector('.new-card');
	const cardImg = card.querySelector('img');
	cardImg.setAttribute('style', 'display:inline-block');
	newCard.remove();
}

const cardsEventListener = (cards) => {
	for(let i = 0; i<cards.length; i++){
		cards[i].addEventListener('mouseenter', displayHiddenCard);
		cards[i].addEventListener('mouseleave', hideHiddenCard);
	}
}

const changeImage = (e) => {
	const images = {img1:'images/image.png',
					img2: 'images/image1.png',
					img3: 'images/image2.png'
				}
	const infoCard = e.currentTarget;
	const img = document.querySelector('.fourth-content img');
	const infoCardId= infoCard.id;
	const newImg = images[infoCardId];

	img.src = newImg;
	infoCard.setAttribute('style', 'background-color: var(--pink-shade');
	document.querySelector(`#${infoState}`).setAttribute('style', 'background-color: #F6F6F6')

	infoState = infoCardId;
}

const imageInfoListener = (info) => {
	for(let i = 0; i<info.length; i++)
		info[i].addEventListener('click', changeImage);
}

const email = document.querySelector('#email');
const firstName = document.querySelector('#first-name');
const lastName =  document.querySelector('#last-name');

email.addEventListener('focus', focusChangeLabel);
firstName.addEventListener('focus', focusChangeLabel);
lastName.addEventListener('focus', focusChangeLabel);

email.addEventListener('focusout', focusOutChangeLabel);
firstName.addEventListener('focusout', focusOutChangeLabel);
lastName.addEventListener('focusout', focusOutChangeLabel);

const contactBtn = document.querySelector('#contact');
contactBtn.addEventListener('click', displayForm);

const imageInfo = document.querySelectorAll('.fourth-content-img-info div');
let infoState = 'img1';
imageInfoListener(imageInfo);

const cards = document.querySelectorAll('.card');
cardsEventListener(cards);
