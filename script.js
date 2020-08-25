"use strict"

function validate(){

	var username = document.getElementById('username').value;
	var email = document.getElementById('email').value;
	
	if(username == ""){
		document.getElementById('userMsg').innerHTML = "username can't left empty";
		return false;
	}	
	else if(email == ""){
		document.getElementById('userMsg').innerHTML = "* email can't left empty";
		return false;
	}
	else{
		return true;
	}

}

function remover(){
	document.getElementById('userMsg').innerHTML = "";
	document.getElementById('emailMsg').innerHTML = "";
}

function blurmsg(){

	if(document.getElementById('username').value == "" ){
		document.getElementById('userMsg').innerHTML = "* this field is required!";		
	}
	if( document.getElementById('email').value == ""){		
		document.getElementById('emailMsg').innerHTML = "* this field is required!";
	}
	
}