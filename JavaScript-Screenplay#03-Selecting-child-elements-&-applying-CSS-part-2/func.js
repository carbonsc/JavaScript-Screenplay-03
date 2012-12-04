function add_border(){
var element = document.getElementById('box').getElementsByTagName('div');

for(var i = 0; i< element.length; i++){

	element[i].style.border ="1px solid red";
	}
}
window.onload = function (){

	add_border();
	
}