const deleteButton = document.querySelector('.delete-button');
const sendButton = document.querySelector('.send-button');
const result = document.querySelector('.result');
const input = document.querySelector("input[type='text']");

sendButton.addEventListener('click' , function(){

    if(document.querySelector('a.info')){
        document.querySelector('a.info').remove();
    }
    const inpValue = input.value;

    let card = document.createElement('div');
    card.className = 'card-result';

    let text = document.createElement('div');
    text.className = 'text-card';
    text.textContent = inpValue;

    let checkbox = document.createElement('div');
    checkbox.className = 'checkbox-area';

    let inpCheck = document.createElement("input");
    inpCheck.setAttribute('type','checkbox')

    checkbox.appendChild(inpCheck);
    card.appendChild(text);
    card.appendChild(checkbox);

    result.appendChild(card);

    input.value = ''
})

deleteButton.addEventListener('click' , ()=> {
    const checkbox = document.querySelectorAll("input[type='checkbox']:checked");

    if(!checkbox) {
        return;
    }

    checkbox.forEach((check)=> {
        check.closest('.card-result').remove();
    })


})