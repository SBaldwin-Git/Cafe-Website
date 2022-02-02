function createContact() {
    const content = document.getElementById('content');

    while (content.firstChild) {
        content.firstChild.remove()
    };

    content.appendChild(createOpeningTimes());
    content.appendChild(createContactDetails());
}

function createOpeningTimes() {
    const openingTimesContainer = document.createElement('div');
    const openingTimesHeader = document.createElement('h2');
    const addressHeader = document.createElement('h2');
    openingTimesContainer.classList.add('contactDetailsContainer')

    //Address
    addressHeader.textContent = 'Where to find us:';
    const addressContainer = document.createElement('ul');
    const addressArray = [
        document.createElement('li'),
        document.createElement('li'),
        document.createElement('li'),
        document.createElement('li'),
        document.createElement('li')
    ];

    addressArray[0].textContent = 'Cafe Naples';
    addressArray[1].textContent = 'Coffee Street';
    addressArray[2].textContent = 'Espresso Way';
    addressArray[3].textContent = 'Mochashire';
    addressArray[4].textContent = 'LA12 TTE5';

    for (let i = 0; i < addressArray.length; i++) {
        addressContainer.appendChild(addressArray[i]);
    }

    openingTimesContainer.appendChild(addressHeader);
    openingTimesContainer.appendChild(addressContainer)

    //Opening times
    openingTimesHeader.textContent = 'Opening times:';
    const openingTimesListContainer = document.createElement('ul');
    const openingTimesArray = [
        document.createElement('li'),
        document.createElement('li'),
        document.createElement('li'),
        document.createElement('li'),
        document.createElement('li'),
        document.createElement('li'),
        document.createElement('li')
    ];

    openingTimesArray[0].textContent = 'Mon: 07:00 - 20:00';
    openingTimesArray[1].textContent = 'Tue: 07:00 - 20:00';
    openingTimesArray[2].textContent = 'Wed: 07:00 - 16:00';
    openingTimesArray[3].textContent = 'Thu: 07:00 - 16:00';
    openingTimesArray[4].textContent = 'Fri: 07:00 - 20:00';
    openingTimesArray[5].textContent = 'Sat: 07:00 - 20:00';
    openingTimesArray[6].textContent = 'Sun: 08:00 - 16:00';

    for (let i = 0; i < openingTimesArray.length; i++) {
        openingTimesListContainer.appendChild(openingTimesArray[i]);
    }

    openingTimesContainer.appendChild(openingTimesHeader);
    openingTimesContainer.appendChild(openingTimesListContainer)

    return openingTimesContainer;
}

function createContactDetails() {
    const contactDetailsContainer = document.createElement('div');
    const contactDetailsHeader = document.createElement('h2');
    const contactPhoneNumber = document.createElement('p');
    const contactEmail = document.createElement('p');

    contactDetailsContainer.classList.add('contactDetailsContainer');

    contactDetailsHeader.textContent = 'Contact us at:';
    contactPhoneNumber.textContent = '0264846992734';
    contactEmail.textContent = 'cafenaples@gmail.com'

    contactDetailsContainer.appendChild(contactDetailsHeader);
    contactDetailsContainer.appendChild(contactPhoneNumber);
    contactDetailsContainer.appendChild(contactEmail);

    return contactDetailsContainer;
}

export {
    createContact
}