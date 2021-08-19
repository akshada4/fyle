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
	document.querySelector('html').style.overflow = 'hidden';
	document.querySelector('html').scrollIntoView(true);
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
	const infoCardId = infoCard.id;
	const newImg = images[infoCardId];

	img.src = newImg;
	infoCard.setAttribute('style', 'background-color: var(--pink-shade); color: white;');
	document.querySelector(`#${infoState}`).setAttribute('style', 'background-color: #F6F6F6; color: black')

	infoState = infoCardId;
}

const imageInfoListener = (info) => {
	for(let i = 0; i<info.length; i++)
		info[i].addEventListener('click', changeImage);
}

const slideImages = (e) => {
	const images = document.querySelectorAll('.card');
	const translateValue = 108 * (parseInt(e.target.id)-1);
	for(let i = 0 ; i < images.length ; i++)
		images[i].setAttribute('style', `transform: translateX(${translateValue - 216}%)`);
}

const changeSliderBtn = (e) => {
		e.target.src = 'svg/1-2.svg';
		e.target.className = "";
		const prevSlide = document.getElementById(sliderBtnId);
		prevSlide.src = 'svg/2-2.svg';
		prevSlide.className = 'svg';
		sliderBtnId = e.target.id;
}

const sliderBtnsListener = (btns) => {
	for(let i = 0; i<btns.length; i++){
		btns[i].addEventListener('click', (e) => {
			slideImages(e);
			if(e.target.id !== sliderBtnId)
				changeSliderBtn(e);
		})
	}
}

const changeCheckBox = (e) => {
	const box = e.currentTarget;
	if(!checkBoxState) {
		checkBoxState = 1;
		const img = document.createElement('img');
		img.src = 'svg/tick.svg';
		img.className = 'tick-img';
		box.insertBefore(img, box.firstChild);
	}
	else {
		checkBoxState = 0;
		box.querySelector('.tick-img').remove();
		box.setAttribute('style', 'background: transparent');
	}
	box.querySelector('input').value = checkBoxState;
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
let infoState = 'img1'; //id 
imageInfoListener(imageInfo);

const cards = document.querySelectorAll('.card');
cardsEventListener(cards);

const sliderBtns = document.querySelectorAll('.wwd-svg img');
let sliderBtnId = '1';
let sliderBtnState = 1; // id of slider btn
sliderBtnsListener(sliderBtns);

const checkBox = document.querySelector('.check-box-span');
let checkBoxState = false; //toggle
checkBox.addEventListener('click', changeCheckBox);
