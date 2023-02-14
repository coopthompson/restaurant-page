import './greeting.css'

function homeHeader () {
    const restaurantHeader = document.createElement('h2');
    const headerText = document.createTextNode('Schmoogie Restuarant-A');
    restaurantHeader.appendChild(headerText);
    return restaurantHeader;
};

function homeBody () {
    const explain = document.createElement('p');
    const explainText = document.createTextNode('Schmoogie is the best Italian/Sushi/Ice-cream palor fusion to ever exist (it\'s also the only one to exist). Our founder, JS. Schmoogie instilled in us a commit to quality ingredients over everything else. Thats why our dishes are so expensive. Nothing but the best!');
    explain.appendChild(explainText);
    return explain;
};

function homeImage() {
    const sushiImage = document.createElement('img')
    sushiImage.src = "../ice-sush.png"
    sushiImage.classList.add('pic')
    content.appendChild(sushiImage);
    return sushiImage;
}

function constructHome() {
    const homeBox = document.createElement('div');
    homeBox.appendChild(homeHeader());
    homeBox.appendChild(homeBody());
    homeBox.appendChild(homeImage());
    homeBox.classList.add('home-style')
    const content = document.getElementById('content');
    content.appendChild(homeBox);
}

export default constructHome

