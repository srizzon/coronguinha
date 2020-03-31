chrome.storage.sync.get(['total'], function(items) {
	document.getElementById('total').textContent = items.total;
});