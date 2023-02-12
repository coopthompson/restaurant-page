const content = document.getElementById('content');

function componentsAppend() {
    
    const restaurantHeader = document.createElement('h3');
    const explain = document.createElement('p');
    const sushiImage = document.createElement('img')
    sushiImage.src = "../ice-sush.png"
    const headerText = document.createTextNode('Schmoogie Restuarant-A');
    const explainText = document.createTextNode('Schmoogie is the best Italian/Sushi/Ice-cream palor fusion to ever exist (it\'s also the only one to exist). Our founder, JS. Schmoogie instilled in us a commit to quality ingredients over everything else. Thats why our dishes are so expensive. Nothing but the best!');
    restaurantHeader.appendChild(headerText);
    explain.appendChild(explainText);

    content.appendChild(restaurantHeader);
    content.appendChild(explain);
    content.appendChild(sushiImage);
  }

  componentsAppend();
  