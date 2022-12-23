
let btn = document.querySelector('#btn');
let list = document.querySelector('#list');
let markaz_individual = document.querySelector('.markaz_individual');


function nimadur(){
    let result = " "
            for (let i = 0; i < arr.length; i++) {
            result
            +=`
            <li class="card__itet">
            <div class="card__itet__left">
            <img src="./data/img/tdpu1.jpeg" alt="rasm"  class="card__itet__left__img">

            </div>
            <div class="card__itet__right">
                <h2 class="card__itet__right__title">
                    ${arr[i].title}
                </h2>
                <p class="card__itet__right__text">
                    ${arr[i].text}
                </p>
            </div>
                <a href="./markaz_item.html" class="card__itet__links">
                    TO'LIQROQ TANISHUV
                </a>
        </li>
            
            `
          }

          list.innerHTML = result
    }

nimadur()


function markazItem() {

    let resultMarkaz = " "

    for (let i = 0; i < 1; i++) {
        resultMarkaz += `
        <img src="./data/img/tdpu1.jpeg" alt="">
        <p class="news_date"> <span>Kabo Primer </span>/ 22 МАЙ, 2021 </p>
        <h2 class="news_title">${arr[i].title}</h2>
        <p>
            ${arr[i].text}
        </p>
        <a href="kafedra.html" class="active-btn mt-3"><span>
            Yangiliklar ro'yxatiga qaytish
        </span></a>
        
        `
    }

    markaz_individual.innerHTML = resultMarkaz
}


markazItem();