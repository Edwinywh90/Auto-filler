document.getElementById("load-fill").addEventListener("click", () => {
	chrome.storage.sync.get([
		'accountname',
		'accountlink',
		'description',
		'email'
	], function(result) {
		document.getElementById('accountname').value = result.accountname;
		document.getElementById('accountlink').value = result.accountlink;
		document.getElementById('description').value = result.description;
		document.getElementById('email').value = result.email;
	});

	/* Auto fill form */
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			accountname: document.getElementById('accountname').value,
			accountlink: document.getElementById('accountlink').value,
			description: document.getElementById('description').value,
			email: document.getElementById('email').value
		}, function(response) {
			console.log(response.status);
		});
	});
});

// document.getElementById("auto-fill").addEventListener("click", () => {
// 	/* Auto fill form */
// 	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
// 		chrome.tabs.sendMessage(tabs[0].id, {
// 			accountname: document.getElementById('accountname').value,
// 			accountlink: document.getElementById('accountlink').value,
// 			description: document.getElementById('description').value,
// 			email: document.getElementById('email').value
// 		}, function(response) {
// 			console.log(response.status);
// 		});
// 	});
// });

document.getElementById("reset-fields").addEventListener("click", () => {
	/* Reset extension form values */
	document.getElementById('accountname').value = '';
	document.getElementById('accountlink').value = '';
	document.getElementById('description').value = '';
	document.getElementById('email').value = '';
});


document.getElementById("save").addEventListener("click", () => {
	chrome.storage.sync.set({
		accountname: document.getElementById('accountname').value,
		accountlink: document.getElementById('accountlink').value,
		description: document.getElementById('description').value,
		email: document.getElementById('email').value
	}, function() {
		console.log("Saved!");
	});
});

document.getElementById("load").addEventListener("click", () => {
	chrome.storage.sync.get([
		'accountname',
		'accountlink',
		'description',
		'email'
	], function(result) {
		document.getElementById('accountname').value = result.accountname;
		document.getElementById('accountlink').value = result.accountlink;
		document.getElementById('description').value = result.description;
		document.getElementById('email').value = result.email;
	});
});
