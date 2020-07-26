// Get Quotes from API and proxyUrl via Heroku server
async function getQuote () {
	const proxyUrl = 'https://quiet-retreat-53485.herokuapp.com/';
	const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
	try {
		const res = await fetch(proxyUrl + apiUrl);
		const data = await res.json();
		console.log(data);
	} catch (error) {
		getQuote();
		console.log('Whoops, no quotes available', error);
	}
}

// Get Quote onload
getQuote();
