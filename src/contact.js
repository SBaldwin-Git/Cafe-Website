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

    return openingTimesContainer;
}

function createContactDetails() {
    const contactDetailsContainer = document.createElement('div');
    const contactDetailsHeader = document.createElement('h2');


    return contactDetailsContainer;
}

export {
    createContact
}