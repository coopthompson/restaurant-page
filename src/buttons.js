function buttonCreator () {
    const buttonBox = document.createElement('div');
    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    buttonBox.appendChild(homeButton);
    buttonBox.appendChild(menuButton);
    buttonBox.appendChild(contactButton);
    document.body.insertBefore(buttonBox, document.body.firstChild);
}

export default buttonCreator