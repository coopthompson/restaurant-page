import './choose.css'

const menuItem = (name, price, desc, image) => {
    const fullItem = document.createElement('div');
    const nameItem = document.createElement('h2');
    const priceItem = document.createElement('h2');
    const descItem = document.createElement('p');
    const nameText = document.createTextNode(name);
    const priceText = document.createTextNode(price);
    const descText = document.createTextNode(desc);
    const itemImage = document.createElement('img');
    const namePrice = document.createElement('div')
    itemImage.src = image
    fullItem.classList.add('menu-style')
    nameItem.appendChild(nameText);
    priceItem.appendChild(priceText);
    namePrice.appendChild(nameItem);
    namePrice.appendChild(priceItem);
    namePrice.classList.add('item-style')
    descItem.appendChild(descText);
    descItem.classList.add('desc-style')
    fullItem.appendChild(namePrice);
    fullItem.appendChild(descItem); 
    fullItem.appendChild(itemImage);
    itemImage.classList.add('pic-style')
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