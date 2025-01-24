$(function () {
     $(".reviews-slider__inner").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      });

      $('.questions-accardion__btn').on('click', function(){
        $(this).next().slideToggle(500); 
     });
})


window.addEventListener('DOMContentLoaded', () => {
    const deadline = '2025-02-1';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),//Разница между конечной датой и той которая сейчас  в кол-ве миллисекунд
            days = Math.floor( (t/(1000*60*60*24)) ),//Math.floor -округление до ближайшего целого
            hours = Math.floor( (t/(1000*60*60) % 24) );//% возращает остаток от деления
            minutes = Math.floor( (t/1000/60) % 60 ),
            seconds = Math.floor( (t/1000) % 60 )

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num){ //Подставляем 0 в даты
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) { //Устанавливаем таймер

        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),


            
            timeInterval = setInterval(updateClock, 1000);//Запускаем функцию updateClock каждую секунду

        updateClock(); //Убираем мигание таймера то есть он запускается

        function updateClock() { //Обновляем каждую секунду
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);// Если время вышло, то таймер перестает обновляться
            }
        }
    }

    setClock('.timer', deadline);



    // Маска для Инпута
    var element = document.getElementById('input-mask');
    var maskOptions = {
        mask: '+{7}(000)000-00-00'
    };

    if(element){
        var mask = IMask(element, maskOptions);
    }
    
   

})