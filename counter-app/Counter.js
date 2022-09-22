const button = document.getElementById('counter-button');
const counterElement = document.getElementById('counter-element');
const counterChain = document.getElementById('counter-chain');


counterElement.innerText = 0;

let counter = 0;

function getCounterValue (){
	 counter += 1;
	 return counter;
}

button.addEventListener('click', () => {
	counterElement.innerText = getCounterValue()
});

function save() {
  counterChain.innerText += counter+ " - ";
	counterElement.innerText = 0;
	counter = 0;
}
