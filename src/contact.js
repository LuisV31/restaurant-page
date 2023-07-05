import instagramLogoPath from './images/instagram.png';
import facebookLogoPath from './images/facebook.png';
import youTubeLogoPath from './images/youtube.png';

export function loadContact() {
    const contentDiv = document.getElementById('content');

    const header = document.createElement('h1');
    header.textContent = 'Contact and Follow us';
    contentDiv.appendChild(header);

    const contact = document.createElement('p');
    contact.textContent = 'Phone: 773-555-5555 \n Email: contact@taqueriadonluis.com';
    contentDiv.appendChild(contact);

    // Create a div to hold dthe social media logos
    const socialMediaDiv = document.createElement('div');
    contentDiv.appendChild(socialMediaDiv);

    // Add IG logo
    const instagramLogo = document.createElement('img');
    instagramLogo.src = instagramLogoPath;
    instagramLogo.alt = 'Follow us on Instagram';
    socialMediaDiv.appendChild(instagramLogo);

    // Add the Facebook logo
    const facebookLogo = document.createElement('img');
    facebookLogo.src = facebookLogoPath;
    facebookLogo.alt = 'Follow us on Facebook';
    socialMediaDiv.appendChild(facebookLogo);

    // Add the YouTube logo
    const youTubeLogo = document.createElement('img');
    youTubeLogo.src = youTubeLogoPath;
    youTubeLogo.alt = 'Follow us on YouTube';
    socialMediaDiv.appendChild(youTubeLogo);

}