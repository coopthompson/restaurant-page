import './call.css'

function contactHeader () {
    const headerFull = document.createElement('h1');
    const headerText = document.createTextNode('Contact Us');
    headerFull.appendChild(headerText);
    headerFull.classList.add('header-style')
    return headerFull;
};

function contactProfile () {
    const explainBox = document.createElement('div');
    const textBox = document.createElement('div');
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
    chefImage.classList.add('pic-style')
    explainProfile.appendChild(profileText);
    textBox.appendChild(chefName);
    textBox.appendChild(phoneNumber);
    textBox.append(explainProfile);
    textBox.classList.add('text-style');
    explainBox.append(chefImage);
    explainBox.append(textBox);
    explainBox.classList.add('contact-style');

    return explainBox;
};

function constructContact() {
    const content = document.getElementById('content');
    content.appendChild(contactHeader());
    content.appendChild(contactProfile())
}

export default constructContact