


let list_fakultetlar = document.querySelector('#list_fakultetlar');


function listFakultetlar(){
    let resultFakultetlar = " "
            for (let i = 0; i < fakultetlarArr.length; i++) {
                resultFakultetlar
            +=`
            <li class="card__itet">
            <div class="card__itet__left">
            <img src="./data/img/tdpu1.jpeg" alt="rasm"  class="card__itet__left__img">

            </div>
            <div class="card__itet__right">
                <h2 class="card__itet__right__title">
                    ${fakultetlarArr[i].title}
                </h2>
                <p class="card__itet__right__text">
                    ${fakultetlarArr[i].text}
                </p>
            </div>
                <a href="./news_item.html" class="card__itet__links">
                    TO'LIQROQ TANISHUV
                </a>
        </li>
            
            `
          }

          list_fakultetlar.innerHTML = resultFakultetlar
    }

    

    listFakultetlar()

