const PAGE = document.getElementById('page');
const URL_API = 'https://gutendex.com/books?ids=';
const PAGE_TITLE = document.getElementById('PAGE_TITLE');
console.log(PAGE_TITLE);

let strUrl = window.location.href;

console.log(strUrl);
let url = new URL(strUrl);
let id = url.searchParams.get('id');

const getData = async () => {
	const response = await fetch(URL_API + id);
	const resFormat = await response.json();
	console.log(resFormat.results);
	afficher(resFormat.results);
};

/**
 *
 * @param {*} data
 *
 */

const afficher = (data) => {
	for (const d of data) {
		PAGE_TITLE.innerText = d.title;
		let image = '';
		let epubImg = '';
		let rdf = '';
		let mobi = '';
		let zip = '';
		let html = '';
		let plain = '';

		for (const key in d.formats) {
			//console.log(key)
			if (key == 'image/jpeg') {
				console.log(d.formats[key]);
				image = d.formats[key];
			}

			switch (key) {
				case 'application/epub+zip':
					//console.log(d.formats[key]);
					epubImg = d.formats[key];
					break;
				case 'application/rdf+xml':
					//console.log(d.formats[key]);
					rdf = d.formats[key];
					break;
				case 'application/x-mobipocket-ebook':
					//console.log(d.formats[key]);
					mobi = d.formats[key];
					break;
				case 'application/zip':
					//console.log(d.formats[key]);
					zip = d.formats[key];
					break;
				case 'text/html; charset=utf-8':
					//console.log(d.formats[key]);
					html = d.formats[key];
					break;
				case 'text/plain; charset=utf-8':
					//console.log(d.formats[key]);
					plain = d.formats[key];
					break;
				default:
					break;
			}
		}
		PAGE.innerHTML = `
        
        <div class="pageWrapper">
        <h3 class="page_title">${d.title} by ${d.authors.map((el) => el.name)}</h3>
        <div class="content">
            <div class="img">
                <img src=${image} alt=${d.title}>
            </div>
            <div class="download">
                <h4>DownLoad</h4>
                <ul class="dl-list">
                <li><a href=${epubImg}><img src="./assets/img/epub.png" class="icon"/></a></li>
                <li><a href=${rdf}><img src="./assets/img/fichier-xml.png" class="icon"/></a></li>
                <li><a href=${mobi}><img src="./assets/img/mobi.png" class="icon"/></a></li>
                <li><a href=${zip}><img src="./assets/img/fichier-zip.png" class="icon"/></a></li>
                <li><a href=${html}><img src="./assets/img/html.png" class="icon"/></a></li>
                <li><a href=${plain}><img src="./assets/img/sms.png" class="icon"/></a></li>
                </ul>
            </div>
        </div>
    </div>
        
        `;
	}
};

getData();
