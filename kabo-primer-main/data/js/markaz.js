
let btn = document.querySelector('#btn');
let list = document.querySelector('#list');


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
                <a href="#link" class="card__itet__links">
                    TO'LIQROQ TANISHUV
                </a>
        </li>
            
            `
          }

          list.innerHTML = result
    }

    

nimadur()

