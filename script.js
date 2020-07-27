const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

// Get Quote From API
async function getQuote () {
	// Custom Proxy URL to make our API call in order to avoid a CORS error
	const proxyUrl = 'https://quiet-retreat-53485.herokuapp.com/';
	const apiUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
	try {
		const response = await fetch(proxyUrl + apiUrl);
		const data = await response.json();
		// Checks if Author field is blank and replace it with 'Unknown'
		if (data.quoteAuthor === '') {
			authorText.innerText = 'Unknown';
		}
		else {
			authorText.innerText = data.quoteAuthor;
		}
		// Dynamically reduce font size for long quotes
		if (data.quoteText.length > 120) {
			quoteText.classList.add('long-quote');
		}
		else {
			quoteText.classList.remove('long-quote');
		}
		quoteText.innerText = data.quoteText;
	} catch (error) {
		getQuote();
	}
}

// Tweet Quote
function tweetQuote () {
	const quote = quoteText.innerText;
	const author = authorText.innerText;
	const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
	window.open(twitterUrl, '_blank'); // New Tab
}

// Get Quote onload
getQuote();
