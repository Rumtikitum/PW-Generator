//pulling elements from HTML (button responses) to support website functionality
const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const ucEl = document.getElementById('uC');
const lcEl = document.getElementById('lC');
const numEl = document.getElementById('num');
const specEl = document.getElementById('specChar');
const generateEl = document.getElementById('generate');
//

//establishing randomized functions to help pull characters. Referred to browser character code
function lowercaseRandomizer() {
    const lowerAlpha = 'qwertyuiopasdfghjklzxcvbnm'
	return lowerAlpha[Math.floor(Math.random() * lowerAlpha.length)]
}
function uppercaseRandomizer() {
    const upperAlpha = 'QWERTYUIOPASDFGHJKLZXCVBNM'
	return upperAlpha[Math.floor(Math.random()* upperAlpha.length)]
}
function numberRandomizer() {
    const numberRand = '123456789'
	return numberRand[Math.floor(Math.random() * numberRand.length)];
}
function specialCharacter() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}


//bunching the randomized functions to simplify coding
const randomizer = {
	lowercaseRandomizer,
	uppercaseRandomizer,
	numberRandomizer,
	specialCharacter
}

//establishing functionality when we click out utilizing the id=generate
generate.addEventListener('click', () => {
	const confirmLow = lcEl.checked;
    const confirmSpecChar = specEl.checked;
    const length = +lengthEl.value;
	const confirmNum = numEl.checked;
	const confirmUp = ucEl.checked;
    
    //when button is clicked, password will populate in the textbox
	passwordEl.innerText = generatePassword(confirmLow, confirmUp, confirmNum, confirmSpecChar, length);    
});

//Getting all the code set up for the "Generate Password" button functionality
//Establishing functions for site
function generatePassword(lowercaseRandomizer, uppercaseRandomizer, numberRandomizer, specialCharacter, length) {
	let generatedPassword = '';
    //identify which buttons were confirmed
	const customConfirm = lowercaseRandomizer + uppercaseRandomizer + numberRandomizer + specialCharacter;
    //counting for each customization. Establishing which is true or false. Preparing for Loop
	const customArray = [{lowercaseRandomizer}, {uppercaseRandomizer}, {numberRandomizer}, {specialCharacter}].filter(item => Object.values(item)[0]);
	console.log('customArray: ', customArray)
	// Error notice in the case 
	if(customConfirm === 0) {
		return 'ERROR! Must at least select one option to Generate Password.';
	}
	
	//creating loop for password generator
	for(let i=0; i<length; i+=customConfirm) {
		customArray.forEach(type => {
			const genPass = Object.keys(type)[0];
			generatedPassword += randomizer[genPass]();
		});
	}
	
    //modified answer. For some reason when clicking uppercase, lowercase & numbers you would get an extra number. Only solution I currently found thanks to google....
	const correctedArray = generatedPassword.slice(0, length);
	
	return correctedArray;
}
