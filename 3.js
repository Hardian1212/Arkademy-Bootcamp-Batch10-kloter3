const Acak = (input) => {
	const character = "0123456789abcdefghijklmnopqrstuvwxyz";
	const data = input;
	var result = '';
	var results = [];

	for (let i=0; i<data; i++) {
		
	for (let j=0; j<32; j++) {
		result += character.charAt(Math.random() * 32);
		}

		results.push(result);
		result = "";
	}

	for (let i=0; i<results.length; i++) {
		console.log(results[i]);
	}
}

Acak(2);