const menuItem = (name, price, desc, image) => {
    const fullItem = document.createElement('div');
    const nameItem = document.createElement('h2');
    const priceItem = document.createElement('p');
    const descItem = document.createElement('p');
    const nameText = document.createTextNode(name);
    const priceText = document.createTextNode(price);
    const descText = document.createTextNode(desc);
    const itemImage = document.createElement('img');
    itemImage.src = image
    nameItem.appendChild(nameText);
    priceItem.appendChild(priceText);
    descItem.appendChild(descText);
    fullItem.appendChild(nameItem);
    fullItem.appendChild(priceItem);
    fullItem.appendChild(descItem); 
    fullItem.appendChild(itemImage);
    return fullItem;
}



function constructMenu () {
    const content = document.getElementById('content')
    const fullMenu = document.createElement('div');
    const sashimiIce = menuItem('Salmon Ice', '$100','Witness perfection! This is a slice of fresh salmon on top of vanilla bean gellato.', '../salmonice.png');
    fullMenu.appendChild(sashimiIce);
    content.appendChild(fullMenu);
}

export default constructMenu