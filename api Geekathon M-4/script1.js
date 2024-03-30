const url = 'https://github-repos.p.rapidapi.com/search?user=anchitjulaniya';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c6b77b25a9msh4fe51e21727aad3p171430jsn50b8fc836df7',
		'X-RapidAPI-Host': 'github-repos.p.rapidapi.com'
	}
};


async function x(){
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}

x()