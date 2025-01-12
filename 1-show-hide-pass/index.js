const passContainer = document.querySelector('.pass-container');
passContainer.style.width = '300px';
passContainer.style.height = '60px';
passContainer.style.backgroundColor = '#228291';
passContainer.style.display = 'flex';
passContainer.style["justify-content"] = 'space-around';
passContainer.style["align-items"] = 'center';

const passBox = document.createElement('input');
passBox.type = 'text';

const hidePassButton = document.createElement('button');
hidePassButton.style.width = '30px';
hidePassButton.style.height = '30px';

window.addEventListener('load', (e) => {
    passContainer.appendChild(passBox);
    passContainer.appendChild(hidePassButton);
})