export function loadMenu() {
    const contentDiv = document.getElementById('content');

    // Menu header
    const menuHeader = document.createElement('h1');
    menuHeader.textContent = 'Our Menu';
    contentDiv.appendChild(menuHeader);

    // Creating a taco div
    const tacoSectionDiv = document.createElement('div');
    
    // Tacos
    const tacoHeader = document.createElement('h2');
    tacoHeader.textContent = 'Tacos';
    tacoSectionDiv.appendChild(tacoHeader);

    const taco1 = document.createElement('p');
    taco1.textContent = 'Carne Asada - $4.20';
    tacoSectionDiv.appendChild(taco1);

    const taco2 = document.createElement('p');
    taco2.textContent = 'Pork Al Pastor - $4.20';
    tacoSectionDiv.appendChild(taco2);

    const taco3 = document.createElement('p');
    taco3.textContent = 'Premium Steak - $7.10';
    tacoSectionDiv.appendChild(taco3);

    // Creating a drink div
    const drinkSectionDiv = document.createElement('div');

    // Drinks
    const drinksHeader = document.createElement('h2');
    drinksHeader.textContent = 'Drinks- Sm: $3.00 Lrg: $5.00';
    drinkSectionDiv.appendChild(drinksHeader);

    const drink1 = document.createElement('p');
    drink1.textContent = '~Agua de Horchata~';
    drinkSectionDiv.appendChild(drink1);

    const drink2 = document.createElement('p');
    drink2.textContent = '~Agua de Limon~';
    drinkSectionDiv.appendChild(drink2);

    const drink3 = document.createElement('p');
    drink3.textContent = '~Agua de Jamaica~';
    drinkSectionDiv.appendChild(drink3);
    
    // Creating a sides div
    const sidesSectionDiv = document.createElement('div');

    // Sides
    const sidesHeader = document.createElement('h2');
    sidesHeader.textContent = 'Sides - $3.00';
    sidesSectionDiv.appendChild(sidesHeader);

    const side1 = document.createElement('p');
    side1.textContent = 'Arroz/Spanish Rice';
    sidesSectionDiv.appendChild(side1);

    const side2 = document.createElement('p');
    side2.textContent = 'Frijoles/Beans';
    sidesSectionDiv.appendChild(side2);

    contentDiv.appendChild(tacoSectionDiv);
    contentDiv.appendChild(drinkSectionDiv);
    contentDiv.appendChild(sidesSectionDiv);
}