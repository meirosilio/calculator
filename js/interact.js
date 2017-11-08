$(document).ready(function() {

	let result = 0;
	let prevEntry= 0;
	let operation =null;
	let currentEntry = '0';
	updateScreen(result);

	$('.button').on('click', (event)=> {

		let buttonPressed = $(event.currentTarget).html();
		console.log(buttonPressed);

		switch(buttonPressed){
			case 'C':
				result = 0;
				currentEntry = '0';
				break;
			case 'CE':
				currentEntry= '0';
				break;
			case 'back':
				currentEntry = currentEntry.substring(0, currentEntry.length-1);
				break;
			case '+/-':
				currentEntry*=-1;
				break;
			case '.':
				currentEntry='.';
				break;
			case '%':
				currentEntry = currentEntry/100;
				break;
			case 'sqrt':
				currentEntry = Math.sqrt(currentEntry);
				break;
			case '1/x':
				currentEntry = 1 / currentEntry;
				break;
			case 'pi':
				currentEntry = Math.PI;
				break;
			case '=':
				currentEntry= operate(prevEntry,currentEntry,operation);
				operation = null;
				break;
			default:
				if (isNumber(buttonPressed)){
					if (currentEntry==='0'){
						currentEntry=buttonPressed
					}else{
						currentEntry = currentEntry+buttonPressed;
					}
				}else if(isOperator(buttonPressed)){
					prevEntry = parseFloat(currentEntry);
      				operation = buttonPressed;
      				currentEntry = '';
				}
		}
    updateScreen(currentEntry);
	});
});

function updateScreen(displayValue){
	displayValue = displayValue.toString();
	$('.screen').html(displayValue.substring(0,10));
}

function isNumber(value){
	return !isNaN(value);
}
function isOperator(value){
	return value === '/' || value === '*' || value === '+' || value === '-';
}

function operate(num1,num2,operation){
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	console.log(num1,num2,operation);

	switch(operation){
		case '+':
			return num1+num2;
			break;
		case '-':
			return num1-num2;
			break;
		case '*':
			return num1*num2;
			break;
		case '/':
			return num1/num2;
			break;
	}
}
