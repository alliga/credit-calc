
let getResult = document.querySelector('#getResult'), //кнопка "Рассчитать"
    resultWrap = document.querySelector('#resultWrap');



getResult.addEventListener('click', function(e) {
    let debt = Number(document.querySelector('#debt').value),  //сумма
        percent = Number(document.querySelector('#percent').value), //процент
        years = Number(document.querySelector('#years').value); //количество лет

    resultWrap.innerHTML='';
    e.preventDefault();
    for (let i = 0; i<years; i++) { //количество лет
        let percents = (debt/100)*percent; //процент
        debt += percents;

        console.log(i+1+' год');
        console.log(Math.ceil(debt)+': долг');
        console.log(Math.ceil(percents)+': процент');
        console.log('______');

        resultWrap.insertAdjacentHTML('beforeend', `<div class="item">
                                                                     <div class="item-year">${i+1} год</div>
                                                                     <div class="item-title">В этот год на вас будет долг: <b>${Math.ceil(debt)}</b></div>
                                                                     <div class="item-title">Столько процентов набежит в этом году: <b>${Math.ceil(percents)}</b></div>
                                                                  </div>`);

    }
});




