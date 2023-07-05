import { loadHome } from './home';
import { loadMenu } from './menu';
import { loadContact } from './contact';

function clearContent() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
}

document.getElementById('homeTab').addEventListener('click', () => {
    clearContent();
    loadHome();
});

document.getElementById('menuTab').addEventListener('click', () => {
    clearContent();
    loadMenu();
});

document.getElementById('contactTab').addEventListener('click', () => {
    clearContent();
    loadContact();
});