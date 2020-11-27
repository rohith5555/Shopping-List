var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var delButton = document.getElementsByClassName("delete");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = deleteItemOnClick;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + " "));
	li.appendChild(btn);

	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function strikeThrough(event) {
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("done");
	}
}

function deleteItemOnClick(e) {
	e.target.parentNode.remove();
}

button.onclick = addListAfterClick;
//button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", strikeThrough);

for (i=0; i<delButton.length;i++) {
	delButton[i].addEventListener("click", deleteItemOnClick)
}
