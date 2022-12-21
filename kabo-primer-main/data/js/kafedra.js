
// let btn = document.querySelector('#btn');


let list_kafedra = document.querySelector('#list_kafedra');


function listKafedra(){
    let resultKafedra = " "
            for (let i = 0; i < kafedraArr.length; i++) {
                resultKafedra
            +=`
            <li class="card__itet">
            <div class="card__itet__left">
            <img src="./data/img/tdpu1.jpeg" alt="rasm"  class="card__itet__left__img">

            </div>
            <div class="card__itet__right">
                <h2 class="card__itet__right__title">
                    ${kafedraArr[i].title}
                </h2>
                <p class="card__itet__right__text">
                    ${kafedraArr[i].text}
                </p>
            </div>
                <a href="#link" class="card__itet__links">
                    TO'LIQROQ TANISHUV
                </a>
        </li>
            
            `
          }

          list_kafedra.innerHTML = resultKafedra
    }

    

    listKafedra()

