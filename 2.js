function is_username_valid(username){
	let rules = /^[a-z.]{8}$/;
	if(rules.test(username))
		return true
	return false
}

function is_email_valid(email){
	let rules = /^\w+@[a-zA-Z0-9.]+?\.[a-zA-Z0-9]{2,}$/;
	if(rules.test(email))
		return true
	return false
}

console.log(is_username_valid("iyan.rush"));
console.log(is_username_valid("OK"));
console.log(is_email_valid("I@gmail.com"));
console.log(is_email_valid("Iyan@ZamZam.com"));