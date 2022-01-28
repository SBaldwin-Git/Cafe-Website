function createFooter() {
    const contentContainer = document.querySelector('#content');
    const footer = document.createElement('footer');

    const footerText = document.createElement('p');
    footerText.textContent = 'Created by Sam Baldwin';

    const gitHubLogo = document.createElement('img')
    gitHubLogo.src = '../dist/res/GitHub-Mark-32px.png';
    gitHubLogo.alt = '';

    const gitHubLink = document.createElement('a');
    gitHubLink.href = 'https://github.com/SBaldwin-Git/Cafe-Website';

    footer.appendChild(footerText);
    footer.appendChild(gitHubLink).appendChild(gitHubLogo);
    contentContainer.appendChild(footer);
}

export {createFooter}