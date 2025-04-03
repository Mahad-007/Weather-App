
// console.log("Good Morning");
// fetch("")
// .then((res)=>res.json())
// .then((res)=>console.log(data));

const url = 'https://weather-api167.p.rapidapi.com/api/weather/current?place=London%2CGB&units=standard&lang=en&mode=json';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '4a2fb44c58mshc45e4e544c6146fp126e37jsn7066b96fc2aa',
		'x-rapidapi-host': 'weather-api167.p.rapidapi.com',
		Accept: 'application/json'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}