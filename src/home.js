function createHome() {

    const content = document.getElementById('#content');

    //TODO LIST
    //Customer reviews
    //Your coffee your way? SLOGAN
    //Opening times and location
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