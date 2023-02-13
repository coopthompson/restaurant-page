function contactHeader () {
    const headerFull = document.createElement('h1');
    const headerText = document.createTextNode('Contact Us');
    headerFull.appendChild(headerText);
    return headerFull;
};

function contactProfile () {
    const explainBox = document.createElement('div');
    const chefName = document.createElement('h3');
    const nameText = document.createTextNode('Skittlzeby Jones');
    chefName.appendChild(nameText);
    const phoneNumber = document.createElement('p');
    const numberText = document.createTextNode('123-321-2131');
    phoneNumber.appendChild(numberText);
    const explainProfile = document.createElement('p');
    const profileText = document.createTextNode('Skittlzeby has been working as a chef in the industry for 4 weeks now! He is soooo talented! Call to reserve a table');
    const chefImage = document.createElement('img');
    chefImage.src = '../skittlezby.png'
    explainProfile.appendChild(profileText);
    explainBox.appendChild(chefName);
    explainBox.appendChild(phoneNumber);
    explainBox.append(explainProfile);
    explainBox.append(chefImage);

    return explainBox;
};

function constructContact() {
    const content = document.getElementById('content');
    content.appendChild(contactHeader());
    content.appendChild(contactProfile())
}

export default constructContact