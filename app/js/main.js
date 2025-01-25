$(function () {
     $(".reviews-slider__inner").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
              breakpoint: 720,
              settings: {
                arrows: false
              }
            },
           
          ]
      });

      $('.questions-accardion__btn').on('click', function(){
        $(this).next().slideToggle(500); 
     });
})


window.addEventListener('DOMContentLoaded', () => {
  
    const menu = document.querySelector(".menu");
    const mobile = document.querySelector(".nav-icon");

    mobile.addEventListener("click", function () {
      this.classList.toggle("nav-icon--active");
      menu.classList.toggle("nav--active");
    });



    // Маска для Инпута
    var element = document.getElementById('input-mask');
    var element1 = document.getElementById('input-mask1');
    
    var maskOptions = {
        mask: '+{7}(000)000-00-00'
    };

    if(element){
        var mask = IMask(element, maskOptions);
    }
    if(element1){
        var mask1 = IMask(element1, maskOptions);
    }


   const accardionBtn = document.querySelectorAll('.questions-accardion__btn');

    accardionBtn.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('open');
        })
    })



    const btn = document.querySelector('.btnUp');

        btn.addEventListener('click', ()=>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth' 

            });
        });
        function up() {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 690){
            btn.classList.add('btnUp-visible');
            }else{
            btn.classList.remove('btnUp-visible');
            }
        })
        }
        up();




        const modalBtn = document.querySelectorAll('.btn-modal');
        const modal = document.querySelector('.modal');
        const modalCloseBtn = document.querySelector('.modal__close');
        const test = calcScroll();


            modalBtn.forEach(btn =>{
                btn.addEventListener('click', ()=>{
                    modal.classList.add('show');
                    modal.classList.remove('hide');
                    document.body.style.overflow = 'hidden';
                    document.body.style.marginRight = `${test}px`;
                })
            });

            modalCloseBtn.addEventListener('click', ()=>{
                    modal.classList.add('hide');
                    modal.classList.remove('show');
                    document.body.style.overflow = '';
                    document.body.style.marginRight = `0px`;
            });

            modal.addEventListener('click', (e)=>{
                if(e.target == modal){
                    modal.classList.add('hide');
                    modal.classList.remove('show');
                    document.body.style.overflow = '';
                    document.body.style.marginRight = `0px`;
                }
            });

            document.addEventListener('keydown', (e)=>{
                if(e.code == 'Escape' && modal.classList.contains('show')){
                    modal.classList.add('hide');
                    modal.classList.remove('show');
                    document.body.style.overflow = '';
                    document.body.style.marginRight = `0px`;
                }
            })

        //УБИРАЕМ ДЁРГАНИЕ МОДАЛЬНОГО ОКНА ПРИ ПОЯВЛЕНИИ
        function calcScroll(){
            let div = document.createElement('div');
            div.style.width = '50px';
            div.style.height = '50px';
            div.style.overflowY = 'scroll';
            div.style.visibility = 'hidden';
            
            document.body.append(div);

            let scrollWidth = div.offsetWidth - div.clientWidth;
            
            div.remove();
            
            return scrollWidth;
            }
            //УБИРАЕМ ДЁРГАНИЕ МОДАЛЬНОГО ОКНА ПРИ ПОЯВЛЕНИИ




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
        
                


})