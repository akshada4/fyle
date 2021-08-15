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
