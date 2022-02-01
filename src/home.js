function createHome() {

    const content = document.getElementById('content');

    while (content.firstChild) {
        content.firstChild.remove()
    }

    content.appendChild(createSlogan());
    content.appendChild(createReview());
    content.appendChild(createImg());
}

function createSlogan() {

    const sloganDiv = document.createElement('div');
    const sloganText = document.createElement('h2');

    sloganDiv.classList.add('sloganContainer');
    sloganText.classList.add('sloganText');
    sloganText.textContent = 'FRESHLY BREWED COFFEE, YOUR WAY, EVERYDAY';

    sloganDiv.appendChild(sloganText);

    return sloganDiv;
}


function createReview() {

    const container = document.createElement('div');
    const reviewContainer1 = document.createElement('div');
    const reviewContainer2 = document.createElement('div');
    const reviewContainer3 = document.createElement('div');

    container.classList.add('allReviewContainer');
    reviewContainer1.classList.add('reviewContainer');
    reviewContainer2.classList.add('reviewContainer');
    reviewContainer3.classList.add('reviewContainer');

    const reviewText1 = document.createElement('h3');
    const reviewText2 = document.createElement('h3');
    const reviewText3 = document.createElement('h3');

    const reviewScore1 = document.createElement('p');
    const reviewScore2 = document.createElement('p');
    const reviewScore3 = document.createElement('p');

    reviewScore1.textContent = '⭐⭐⭐⭐⭐';
    reviewScore2.textContent = '⭐⭐⭐⭐⭐';
    reviewScore3.textContent = '⭐⭐⭐⭐⭐';

    reviewText1.textContent = ' Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.';
    reviewText2.textContent = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.';
    reviewText3.textContent = 'Corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.';

    reviewContainer1.appendChild(reviewText1);
    reviewContainer2.appendChild(reviewText2);
    reviewContainer3.appendChild(reviewText3);

    reviewContainer1.appendChild(reviewScore1);
    reviewContainer2.appendChild(reviewScore2);
    reviewContainer3.appendChild(reviewScore3);

    container.appendChild(reviewContainer1);
    container.appendChild(reviewContainer2);
    container.appendChild(reviewContainer3);

    return container;
}

function createImg() {

    const coffeeImg = document.createElement('img');
    coffeeImg.src = '../dist/res/pexels-ekrulila-2128109.jpg';
    coffeeImg.classList.add('homeImg');

    return coffeeImg;
}

export {
    createHome
}