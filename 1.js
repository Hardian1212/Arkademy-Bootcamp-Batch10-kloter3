const biodata = () => {
	const data = {
		name: "iyan",
		address: "Serang",
		hobbies: [
			"Badminton", "Sepakbola", "Futsal", "Travelling", "Music","Memancing"
		],
		is_married: false,
		school: {
			highSchool: "S1",
			universtiry: "UNSERA"
		},
		"skills" : [
			{
				"name"	: "PHP",
				"score"	: 70
			},
			{
				"name"	: "MySql",
				"score"	: 65
			},
			{
				"name"	: "Microsoft Office",
				"score"	: 85
			}
		]
}

	const result = JSON.stringify(data);
	return result;
}

console.log(biodata());