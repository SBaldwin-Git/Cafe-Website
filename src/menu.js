function createMenu() {

    const content = document.getElementById('content');

    while (content.firstChild) {
        content.firstChild.remove()
    }

    content.appendChild(createDrinksMenu());
    // content.appendChild(createFoodMenu());
}

function createDrinksMenu() {
    const drinksContainer = document.createElement('div');
    const drinksHeader = document.createElement('h2');

    drinksContainer.classList.add('menuDiv');
    drinksHeader.textContent = 'Drinks Menu';
    drinksContainer.appendChild(drinksHeader);

    const drinksList = [
        menuItemFactory('Americano', 'A black coffee with 2 shots of espresso.', '2.50'),
        menuItemFactory('Espresso', 'A single shot of espresso coffee.', '1.80'),
        menuItemFactory('Cappuccino', 'Single espresso shot with milk foam.', '2.00'),
        menuItemFactory('Latte', 'A single shot of espresso topped with milk.', '2.60'),
        menuItemFactory('Mocha', 'A single shot of espresso topped with milk and chocolate.', '2.75')
    ];

    for (let index = 0; index < drinksList.length; index++) {
        drinksList[index].classList.add('menuItem');
        drinksContainer.appendChild(drinksList[index]);
    }

    return drinksContainer;
}

function createFoodMenu() {
    const foodContainer = document.createElement('div');

    foodContainer.classList.add('menuDiv');

    // const jeff = personFactory('jeff', 27);

    return foodContainer;
}

function menuItemFactory(name, description, price) {

    const itemContainer = document.createElement('div');
    const itemName = document.createElement('h3');
    const itemDesc = document.createElement('p');
    const itemPrice = document.createElement('p');

    itemName.textContent = name;
    itemDesc.textContent = description;
    itemPrice.textContent = '£' + price;

    itemName.classList.add('itemName');
    itemDesc.classList.add('itemDesc');
    itemPrice.classList.add('itemPrice');

    itemContainer.appendChild(itemName);
    itemContainer.appendChild(itemDesc);
    itemContainer.appendChild(itemPrice);

    return itemContainer;
};

export {
    createMenu
}