import * as Functions from "./modules/checkWebp.js";

Functions.testWebP();

const anchors = document.querySelectorAll('*[data-scroll]');

anchors.forEach(elem => {
    elem.addEventListener('click', (e) => {
        e.preventDefault();
        const blockID = elem.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});