const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', () => {
    // make sure input is not blank
    let chapter = input.value;
    input.value = "";

    // create elements
    const listElem = document.createElement('li');
    const delBtn = document.createElement('button');
    const listText = document.createElement('span');

    listElem.appendChild(listText);
    listText.textContent = chapter;
    listElem.appendChild(delBtn);
    delBtn.textContent = '❌';
    list.appendChild(listElem);

    delBtn.onclick = function(e) {
        list.removeChild(listElem);
    }

    input.focus();
});