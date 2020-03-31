var elementsInsideBody = [...document.body.getElementsByTagName('*')];
// This makes an array of everything inside the body tag

var countCoronguinhas = 0;

//a function that loops through every single item
function findAndReplace(){
	elementsInsideBody.forEach(element =>{
		element.childNodes.forEach(child =>{
			if(child.nodeType === 3){
				replaceText(child);
			}
		});

	});

	setLocalStorage();
}

function replaceText (node) {
	let value = node.nodeValue;

	aux = value.replace(/coronavírus|coronavirus|corona virus|corona vírus|covid-19|covid19|covid/gi, '💉');

	if(value != aux){
		if(!invalidWords(value)){
			var count = (value.match(/coronavírus|coronavirus|corona virus|corona vírus|covid-19|covid19|covid/gi) || []).length;

			countCoronguinhas += count;
		}
	}

	node.nodeValue = aux;
}

function invalidWords(value){
	var result = /function|meta|\{/.test(value);

	return result;
}

function setLocalStorage (count) {
	console.log(countCoronguinhas);
	chrome.storage.sync.set({total: countCoronguinhas});
}

window.onload = findAndReplace();