const links = document.querySelectorAll('[data-to]');
const divContents = document.getElementsByClassName('content');

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
    });
}