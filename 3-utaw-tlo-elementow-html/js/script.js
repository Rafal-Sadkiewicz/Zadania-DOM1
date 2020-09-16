console.log('Warsztat - Ustaw tło elementów HTML');

const setBackground = () => 
{
    let p1 = document.querySelector('.first');
    let p2 = document.querySelector('.second');
    
    p1.classList.toggle('bg-red');
    p2.classList.toggle('bg-yellow');
    
    // p1.classList.add('bg-red');
    // p2.classList.add('bg-yellow');
    
    // p1.style.backgroundColor = 'red';
    // p2.style.backgroundColor = 'yellow';
}

let btnSetBack = document.getElementById('setBack');

btnSetBack.addEventListener('click', setBackground);

//setBackground();