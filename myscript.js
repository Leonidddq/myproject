var botton = document.getElementById('myBotton');
var button = document.getElementById('myButton');

var modal = document.querySelector('#myModal');
var close = document.getElementById('myClose');
var test = document.getElementById('test');
var content = document.getElementById('myContent');

button.onclick = function() {
	
	modal.style.display = "block";
	setTimeout(opacity1, 100);
	
}



close.onclick = function() {
	
	content.style.opacity = "0"
	setTimeout(none, 1000);
	
}

botton.onclick = function() {
	
	botton.style.background = "orange";
}

test.onclick = function() {
	
	test.style.backgroundColor	= "red";
	test.style.marginLeft = "100px";
	test.style.marginTop = "200px";
	test.style.border = "none";
	
}

function opacity1() {
	
	content.style.opacity = "1";
	
}

function none() {
	
	
	modal.style.display = "none";
}


close.onmouseenter = function() {
    close.style.fontSize = "60px";
}

close.onmouseleave = function() {
    close.style.fontSize = "";
}
