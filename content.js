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

	aux = value.replace(/coronavírus/gi, '💉');

	if(value != aux){
		if(!value.includes("(function")){
			var count = (value.match(/coronavírus/gi) || []).length;

			countCoronguinhas += count;
		}
	}

	node.nodeValue = aux;
}

function setLocalStorage (count) {
	chrome.storage.sync.set({total: countCoronguinhas});
}

window.onload = findAndReplace();