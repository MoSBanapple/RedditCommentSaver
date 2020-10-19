console.log("yo");
chrome.storage.sync.get(['color', 'value'], function(result){
	console.log(result);
	console.log(result['value']);
});

let val = "yor";
let toInsert = {};
toInsert[val] = 19;

chrome.storage.sync.set(toInsert);

chrome.storage.sync.get(['yor'], function(result){
	console.log(result);
});

let currentURL = window.location.toString();
let urlSplit = currentURL.split('/');
while (urlSplit[urlSplit.length - 1].length == 0){
	urlSplit.pop();
}
let threadID = urlSplit[urlSplit.length - 2];
let restored = {};

function printTextAreas(){
	console.log("interval");
	var values = [];
	var inputFields = document.getElementsByTagName('textarea');
	var result = 'inputs: ' + inputFields.length;
	for (var i = 0; i < inputFields.length; i++) {
        values.push(inputFields[i].value);
		console.log(inputFields[i].innerHTML);
		let comm = inputFields[i].parentNode.parentNode.parentNode.parentNode.parentNode;
		let id = comm.id
		if (id.length == 0){
			console.log("parent");
			
		} else {
			console.log(id);
		}
    }
	result += '<br />fields: ' + values.length;
	console.log(result);
	console.log(values);
}

function saveText(id, comment){
	let toInsert = {};
	toInsert[id] = comment;
	chrome.storage.local.set(toInsert);
	console.log("Saved " + comment + " to " + id);
	chrome.storage.local.get([id], function(result){
		console.log(result);
	});
}



function logTextAreas(){
	console.log(restored);
	var inputFields = document.getElementsByTagName('textarea');
	for (var i = 0; i < inputFields.length; i++) {

		if (inputFields[i].innerHTML.length > 0){
			continue;
		}
		console.log(inputFields[i].value);
		let comm = inputFields[i].parentNode.parentNode.parentNode.parentNode.parentNode;
		let id = comm.id
		if (id.length == 0){
			//console.log(inputFields[i].parentNode.parentNode.parentNode);
			id = "parent_" + threadID;//inputFields[i].parentNode.parentNode.parentNode.id;
		}
		if (id in restored){
			saveText(id, inputFields[i].value);
		} else {
			let n = i;
			chrome.storage.local.get([id], function(result){
				console.log("Restoring to " + id);
				console.log(result);
				if (result[id]){
					console.log("restore");
					inputFields[n].value = result[id];
					
				}
				console.log("restore2");
				restored[id] = true;
				
				console.log(inputFields[n].value);
			});
		}
		
	}
}

logTextAreas();


document.addEventListener("click", logTextAreas);


document.addEventListener('keypress', logTextAreas);

//const interval = setInterval(printTextAreas, 10000);
