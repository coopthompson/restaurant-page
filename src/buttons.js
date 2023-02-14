import "./top.css"

function buttonCreator () {
    const buttonBox = document.createElement('div');
    buttonBox.classList.add('header')
    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    contactButton.classList.add('button-style');
    homeButton.classList.add('button-style');
    menuButton.classList.add('button-style');
    buttonBox.appendChild(homeButton);
    buttonBox.appendChild(menuButton);
    buttonBox.appendChild(contactButton);
    document.body.insertBefore(buttonBox, document.body.firstChild);
}

export default buttonCreator