const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

// Get Quote From API
async function getQuote () {
	// We need to use a Proxy URL to make our API call in order to avoid a CORS error via Heroku server
	const proxyUrl = 'https://quiet-retreat-53485.herokuapp.com/';
	const apiUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
	try {
		const response = await fetch(proxyUrl + apiUrl);
		const data = await response.json();
		authorText.innerText = data.quoteAuthor;
		quoteText.innerText = data.quoteText;
	} catch (error) {
		getQuote();
	}
}

// Get Quote onload
getQuote();
