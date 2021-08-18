const links = document.querySelectorAll('[data-to]');
const divContents = document.getElementsByClassName('content');
const pageLinks = document.querySelectorAll('[data-page]');
const pageContents = document.getElementsByClassName('list-page');

for (const link of links) {
    link.addEventListener('click', ({ target }) => {
        const id = target.dataset.content;
        for (const divContent of divContents) {
            if (id === divContent.id) {
                divContent.classList.add('active');
            } else {
                divContent.classList.remove('active');
            }
        }
        for (const link of links) {
            link.classList.remove('active');
        }
        target.classList.add('active');
        // Modificar la URL
        const url = target.dataset.to;
        history.pushState({}, '', url);
    });
}

// Evento click de las páginas
for (const pageLink of pageLinks) {
    pageLink.addEventListener('click', () => {
        const page = pageLink.dataset.page;
        for (const pageContent of pageContents) {
            if (pageContent.id === `page-${page}`) {
                pageContent.classList.add('active');
            } else {
                pageContent.classList.remove('active');
            }
        }
        for (const link of pageLinks) {
            link.parentElement.classList.remove('active');
        }
        pageLink.parentElement.classList.add('active');
        const url = `/list/${page}`;
        history.pushState({}, '', url);
    });
}