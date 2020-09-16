let ulItems = document.getElementById('items');
let btn = ulItems.nextElementSibling;

console.log(ulItems);
console.log(btn);

const appender = () =>
{
    let appLi = document.createElement('li');
    let childCounter = ulItems.childElementCount;
    appLi.setAttribute('class', 'item');
    appLi.innerText = `Item ${childCounter + 1}`
    ulItems.appendChild(appLi);
}

btn.addEventListener('click', appender);

