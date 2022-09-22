const BASE_URL='https://api.frontendexpert.io/api/fe/glossary-suggestions';
//const BASE_URL='https://jsonplaceholder.typicode.com/todos';

// Write your code here.
const urlEndPoint=new URL(BASE_URL);

const inputElement=document.getElementById('typehead');
const list=document.getElementById('suggestions-list');

async function callApi( searchText) {
	urlEndPoint.searchParams.set('text', searchText);
	const res=await fetch(urlEndPoint);
	const json=await res.json();
	return json;
}
function onInput() {
	if (inputElement.value) {
		let searchText=document.getElementById('typehead').value??'';
		let data=callApi( searchText);
		data.then((r) => {
			r.forEach((item) => {
				const li=document.createElement('li');
				li.innerText=item;
				list.appendChild(li);
			});
		})

	} else return;
}

inputElement.addEventListener('input', onInput);
