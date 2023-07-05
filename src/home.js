export function loadHome() {

    const contentDiv = document.getElementById('content');
    
    const header = document.createElement('h1');
    header.textContent = 'Taqueria Don Luis';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome to our taqueria! We use the best local ingrediants to make your food fresh daily!';

    const addHeader = document.createElement('h2');
    addHeader.textContent = 'Come join us!';

    const address = document.createElement('address');
    address.textContent = '742 Evergreen Terrace, Chicago, CO 60420';

    contentDiv.appendChild(header);
    contentDiv.appendChild(paragraph);
    contentDiv.appendChild(addHeader);
    contentDiv.appendChild(address);
}