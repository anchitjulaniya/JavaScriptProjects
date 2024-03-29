const url = 'https://resumeparser1.p.rapidapi.com/parse';
const data = new FormData();
data.append('files', '');

const options = {
	method: 'POST',
	headers: {
		'X-RapidAPI-Key': 'b8bb314eb8msh5bcb832919161fdp12af72jsn4c6c655daa90',
		'X-RapidAPI-Host': 'resumeparser1.p.rapidapi.com'
	},
	body: data
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}