/**
 * * Api Guten Dex Book / Gutenberg ebook
 * * URL : https://gutendex.com/books/
 * * PAGE : https://gutendex.com/books/?page=2
 */

const BOOK = document.getElementById('books');
const PAGE = document.getElementById('page');
const URL_API = 'https://gutendex.com/books/';

const getData = async () => {
	const response = await fetch(URL_API);
	const resFormat = await response.json();
	//console.log(resFormat.results)
	afficher(resFormat.results);
};

const afficher = (data) => {
	for (const d of data) {
		BOOK.innerHTML += `
            <div class="title_wrapper">
            <a href="page.html?id=${d.id}"><h3 class="title">${d.title}</h3></a>
                <span class="author">${d.authors.map((el) => el.name)}</span>
            </div>
        `;
	}
};

getData();

const afficherPage = () => {
	PAGE.innerHTML = `

    `;
};
