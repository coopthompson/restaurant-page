import constructHome from './home.js'
import constructMenu from './menu.js'
import constructContact from './contact.js';

function flipPage() {
    constructHome();
    function emptyPage() {
        const content = document.getElementById('content')
        let contentChild = content.lastElementChild; 
            while (contentChild) {
                content.removeChild(contentChild);
                contentChild = content.lastElementChild;  
            }
    }

    const btns = document.querySelectorAll('button');
    btns.forEach(function(button) {
        button.addEventListener('click', function() {
            emptyPage();
            if (button.textContent === 'Home') {
                return constructHome();
            } else if (button.textContent === 'Menu') {
                return constructMenu();
            } else if (button.textContent === 'Contact') {
                return constructContact();
            };
        });
    });
};




export default flipPage
