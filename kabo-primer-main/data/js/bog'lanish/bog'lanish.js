
let talimId=document.querySelector('#talimId')
let talimI2=document.querySelector('#talimI2')
let talimI3=document.querySelector('#talimI3')
let talimI4=document.querySelector('#talimI4')
let rektor1=document.querySelector('#rektor')
let fakultrtlar2=document.querySelector('#fakultrtlar')
let kafedralar3=document.querySelector('#kafedralar')
let bolimlar4=document.querySelector('#bolimlar')
let listBolimlar = document.querySelectorAll('.talimId')






let arrTalim = [
    {
        img:'./img/tdpu1.jpeg',
        userName:'DJABBAROV GAYRATBAY FARXADOVICH',
        specialty: 'Fizika-matematika fakulteti dekani ',
        tel:'(+998 ) 71 215-54-19',
        email:'toxirusmonov94@gmail.com'
    },

    {
        img:'./img/tdpu1.jpeg',
        userName:'DJABBAROV GAYRATBAY FARXADOVICH',
        specialty: 'Fizika-matematika fakulteti dekani ',
        tel:'(+998 ) 71 215-54-19',
        email:'toxirusmonov94@gmail.com'
    },
    {
        img:'./img/tdpu1.jpeg',
        userName:'DJABBAROV GAYRATBAY FARXADOVICH',
        specialty: 'Fizika-matematika fakulteti dekani ',
        tel:'(+998 ) 71 215-54-19',
        email:'toxirusmonov94@gmail.com'
    },

    {
        img:'./img/tdpu1.jpeg',
        userName:'DJABBAROV GAYRATBAY FARXADOVICH',
        specialty: 'Fizika-matematika fakulteti dekani ',
        tel:'(+998 ) 71 215-54-19',
        email:'toxirusmonov94@gmail.com'
    },
    {
        img:'./img/tdpu1.jpeg',
        userName:'DJABBAROV GAYRATBAY FARXADOVICH',
        specialty: 'Fizika-matematika fakulteti dekani ',
        tel:'(+998 ) 71 215-54-19',
        email:'toxirusmonov94@gmail.com'
    },

    {
        img:'./img/tdpu1.jpeg',
        userName:'DJABBAROV GAYRATBAY FARXADOVICH',
        specialty: 'Fizika-matematika fakulteti dekani ',
        tel:'(+998 ) 71 215-54-19',
        email:'toxirusmonov94@gmail.com'
    },

];

function talim(){
    let result = " "

    for(let i=0;i<arrTalim.length;i++){
        result += `
          <li class="bodyMain__item">
                            <div class="bodyMain__item__car">
                                <img src="data/img/rektor_2021.jpg" alt=""  class="bodyMain__item__car-img">
                                <span class="bodyMain__item__car-span">
                                    <h2 class="bodyMain__item__car-span__title">TOXIRJON USMONOV DILSHOTOVICH</h2>
                                    <p class="bodyMain__item__car-span__text">${arrTalim[i].specialty}</p>
                                </span>
                            </div>
                            <div class="bodyMain__item__card">
                                <a href="tel:(+998 ) 71 215-54-19" class="bodyMain__item__card__link1">
                                    <i class="fa fa-phone bodyMain__item__tel" id="bodyMain__item__tel"></i>
                                    <p class="bodyMain__item__card__link__text">

                                    ${arrTalim[i].tel}
                                    </p>
                                </a>
                                <a href="toxirusmonov94@gmail.com" class="bodyMain__item__card__link2">
                                    <p class="bodyMain__item__card__link2__text">
                                            ${arrTalim[i].email}}
                                    </p>
                                </a>
                            </div>
                      </li>
        `
    }

    talimId.innerHTML = result
}
talim()

function fakultrtlar(){
    let res = " "

    for(let i=0;i<arrTalim.length;i++){

        res += `
          <li class="bodyMain__item">
                            <div class="bodyMain__item__car">
                                <img src="data/img/wash.jpg" alt=""  class="bodyMain__item__car-img">
                                <span class="bodyMain__item__car-span">
                                    <h2 class="bodyMain__item__car-span__title">TOXIRJON USMONOV DILSHOTOVICH</h2>
                                    <p class="bodyMain__item__car-span__text">${arrTalim[i].specialty}</p>
                                </span>
                            </div>
                            <div class="bodyMain__item__card">
                                <a href="tel:(+998 ) 71 215-54-19" class="bodyMain__item__card__link1">
                                    <i class="fa fa-phone bodyMain__item__tel " id="bodyMain__item__tel"></i>
                                    <p class="bodyMain__item__card__link__text">
                                    ${arrTalim[i].tel}
                                    </p>
                                </a>
                                <a href="toxirusmonov94@gmail.com" class="bodyMain__item__card__link2">
                                    <p class="bodyMain__item__card__link2__text">
                                    ${arrTalim[i].email}
                                    </p>
                                </a>
                            </div>
                  </li>`
                }
            
                talimI2.innerHTML = res
            }
            
            
            
            function kafedralar(){
                let resS = " "
                for(let i=0;i<arrTalim.length;i++){
            
                    resS += `
                      <li class="bodyMain__item">
                                        <div class="bodyMain__item__car">
                                            <img src="data/img/tdpu1.jpeg" alt=""  class="bodyMain__item__car-img">
                                            <span class="bodyMain__item__car-span">
                                                <h2 class="bodyMain__item__car-span__title">ASATBEK ANVAROV ANVAROVICH</h2>
                                                <p class="bodyMain__item__car-span__text">${arrTalim[i].specialty}</p>
                                            </span>
                                        </div>
                                        <div class="bodyMain__item__card">
                                            <a href="tel:(+998 ) 71 215-54-19" class="bodyMain__item__card__link1">
                                                <i class="fa fa-phone bodyMain__item__tel" id="bodyMain__item__tel"></i>
                                                <p class="bodyMain__item__card__link__text">
                                                ${arrTalim[i].tel}
                                                </p>
                                            </a>
                                            <a href="toxirusmonov94@gmail.com" class="bodyMain__item__card__link2">
                                                <p class="bodyMain__item__card__link2__text">
                                                ${arrTalim[i].email}}
                                                </p>
                                            </a>
                                        </div>
                                  </li>
                    `
                }
                talimI3.innerHTML= resS
            
            }
            
            
            
            
            function bolimlar(){
                let resS = " "
                for(let i=0;i<arrTalim.length;i++){
            
                    resS += `
                      <li class="bodyMain__item">
                                        <div class="bodyMain__item__car">
                                            <img src="data/img/new img/img.jpg" alt="" class="bodyMain__item__car-img">
                                            <span class="bodyMain__item__car-span">
                                                <h2 class="bodyMain__item__car-span__title">ASADJON  ANVAROV ANVAROVICH</h2>
                                                <p class="bodyMain__item__car-span__text">${arrTalim[i].specialty}</p>
                                            </span>
                                        </div>
                                        <div class="bodyMain__item__card">
                                            <a href="tel:(+998 ) 71 215-54-19" class="bodyMain__item__card__link1">
                                                <i class="fa fa-phone bodyMain__item__tel" id="bodyMain__item__tel"></i>
                                                <p class="bodyMain__item__card__link__text">
                                                ${arrTalim[i].tel}
                                                </p>
                                            </a>
                                            <a href="toxirusmonov94@gmail.com" class="bodyMain__item__card__link2">
                                                <p class="bodyMain__item__card__link2__text">
                                                ${arrTalim[i].email}
                                                </p>
                                            </a>
                                        </div>
                                  </li>
                    `
                }

                talimI4.innerHTML= resS
            
            }
            
            rektor1.addEventListener("click", (e) => {
                e.preventDefault();
                talimId.style.display = "block";
                talimI2.style.display = "none";
                talimI3.style.display = "none";
                talimI4.style.display = "none";
            
            })
            
            
            fakultrtlar2.addEventListener("click", (e) => {
                e.preventDefault();
                talimId.style.display = "none";
                talimI2.style.display = "block";
                talimI3.style.display = "none";
                talimI4.style.display = "none";
            }) ;
            
            kafedralar3.addEventListener("click", (e) => {
                e.preventDefault();
                talimId.style.display = "none";
                talimI2.style.display = "none";
                talimI3.style.display = "block";
                talimI4.style.display = "none";
            }) ;
            
            bolimlar4.addEventListener("click", (e) => {
                e.preventDefault();
                talimId.style.display = "none";
                talimI2.style.display = "none";
                talimI3.style.display = "none";
                talimI4.style.display = "block";
}) ;



rektor1.addEventListener("click",rektor1);
fakultrtlar2.addEventListener("click",fakultrtlar);
kafedralar3.addEventListener("click", kafedralar);
bolimlar4.addEventListener("click", bolimlar);


// console.log(rektor1,kafedralar3,bolimlar4,fakultrtlar2);


let bolimlarLists = document.querySelectorAll(".bodyHeader__item")


for (let i = 0; i < bolimlarLists.length; i++) {
    bolimlarLists[i].addEventListener('click', function() {

        console.log("asadbek");
      for (let x = 0; x < bolimlarLists.length; x++) {
        if (bolimlarLists[x] == this) {
            bolimlarLists[x].classList.add('boglanishActive');
        } else {    
            bolimlarLists[x].classList.remove('boglanishActive');
        }
      }
    });
  }