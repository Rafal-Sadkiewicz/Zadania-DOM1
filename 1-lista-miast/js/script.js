let arrCity = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];


let olCityList = document.createElement('ol');
olCityList.setAttribute('class', 'lista');

document.body.insertBefore(olCityList, document.body.lastChild);



arrCity.forEach ( function (element, index)
{
    let cityListElem = document.createElement('li');
    
    /* console.log(element);

    Object.assign(cityListElem,
    {
        className: 'list',
        id: index,
    })
    */

    cityListElem.setAttribute('class', 'city');
    cityListElem.innerText = element;
    
    olCityList.appendChild(cityListElem);
    
});

