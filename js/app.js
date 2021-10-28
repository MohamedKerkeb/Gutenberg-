/**
 * * Api Guten Dex Book / Gutenberg ebook
 * * URL : https://gutendex.com/books/
 * * PAGE : https://gutendex.com/books/?page=2
 */

const BOOK = document.getElementById('books');
const PAGE = document.getElementById('page');
const BUTTON_SEARCH = document.getElementById('submit')
const INPUT = document.getElementById('inputSearch')
const LANG = document.getElementById('lang')
const URL_API = 'https://gutendex.com/books/';
const URL_SEARCH = 'https://gutendex.com/books?search='
const URL_LANG = 'https://gutendex.com/books?languages='

const getData = async (url) => {
	const response = await fetch(url);
	const resFormat = await response.json();
	//console.log(resFormat.results)
	afficher(resFormat.results);
};

const afficher = (data) => {
	BOOK.innerHTML = ''
	for (const d of data) {
		BOOK.innerHTML += `
            <div class="title_wrapper">
            <a href="page.html?id=${d.id}"><h3 class="title">${d.title}</h3></a>
                <span class="author">${d.authors.map((el) => el.name)}</span>
            </div>
        `;
	}
};

BUTTON_SEARCH.addEventListener('click', evt => {
	getData(URL_SEARCH + INPUT.value)
	INPUT.value = ''
})

getData(URL_API);

const objectLang = {"French": "fr", "English": "en", "chinese": "zh", "Danish": "da", "Dutch":"nl" ,"Esperanto": "eo", "Finnish": "fi", "German":"de", "Greek":"el", "Hungarian":"hu", "Italian":"it", "Latin": "la", "Portuguese": "pt", "Spanish": "es", "Swedish": "sv", "Tagalog": "tl",}
let arrayLang = []
for (const key in objectLang) {
	arrayLang.push(`<option value=${objectLang[key]}>${key}</option>`)
}



console.log(arrayLang)

LANG.innerHTML = `
	<label for="lang_select">Choose you Lang: </label>
	<select name="langue" id="lang_select">
		<option value="">-- Please choose a Langue</option>
		${arrayLang.map(el => el)}
	</select>
`

const getSelect = () => {
	const LIST_SELECT = document.querySelectorAll('option')
	console.log(LIST_SELECT)
	for (const select of LIST_SELECT) {
		select.addEventListener('click', (evt) => {
			console.log(evt.target.value)
			getData(URL_LANG + evt.target.value)
		})
	}
	// 
}

getSelect()