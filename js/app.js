/**
 * * Api Guten Dex Book / Gutenberg ebook
 * * URL : https://gutendex.com/books/
 * * PAGE : https://gutendex.com/books/?page=2
 */

const BOOK = document.getElementById('books');
const PAGE = document.getElementById('page');
const BUTTON_SEARCH = document.getElementById('submit')
const INPUT = document.getElementById('inputSearch')
const URL_API = 'https://gutendex.com/books/';
const URL_SEARCH = 'https://gutendex.com/books?search='

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
