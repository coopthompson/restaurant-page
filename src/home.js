function homeHeader () {
    const restaurantHeader = document.createElement('h3');
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
    content.appendChild(sushiImage);
    return sushiImage;
}

function constructHome() {
    const content = document.getElementById('content');
    content.appendChild(homeHeader());
    content.appendChild(homeBody())
    content.appendChild(homeImage());
}

export default constructHome