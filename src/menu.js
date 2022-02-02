function createMenu() {

    const content = document.getElementById('content');

    while (content.firstChild) {
        content.firstChild.remove()
    }

    content.appendChild(createDrinksMenu());
    content.appendChild(createFoodMenu());
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
    const foodHeader = document.createElement('h2');

    foodContainer.classList.add('menuDiv');
    foodHeader.textContent = 'Breakfast Menu';
    foodContainer.appendChild(foodHeader);

    const foodList = [
        menuItemFactory('Croissant', 'A single freshly baked croissant.', '1.00'),
        menuItemFactory('Breakfast Wrap', 'Tortilla wrap filled with bacon, scrambled egg and sausage.', '2.50'),
        menuItemFactory('Full English', '2 rashers of bacon, 2 sausages,1 friend egg, baked beans, grilled tomatoes mushrooms', '3.25'),
        menuItemFactory('Vegan Full English', '2 rashers of vegan bacon, 2 quorn sausages, baked beans, grilled tomatoes mushrooms.', '3.00'),
        menuItemFactory('Beans on Toast', '2 slices of buttered toast with baked beans on top', '1.50')
    ];

    for (let index = 0; index < foodList.length; index++) {
        foodList[index].classList.add('menuItem');
        foodContainer.appendChild(foodList[index]);
    }

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