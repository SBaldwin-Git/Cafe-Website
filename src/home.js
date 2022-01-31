function createHome() {

    const content = document.getElementById('content');

    //TODO LIST
    //Customer reviews
    //Opening times and location

    content.appendChild(createSlogan());
}

function createSlogan(){

    const sloganDiv = document.createElement('div');
    const sloganText = document.createElement('h2');

    sloganDiv.classList.add('sloganContainer');
    sloganText.classList.add('sloganText');

    sloganText.textContent = 'FRESHLY BREWED COFFEE, YOUR WAY, EVERYDAY';

    sloganDiv.appendChild(sloganText);

    return sloganDiv;
}

function createReview(){

}

function createOpeningTimes(){

}

export {
    createHome
}