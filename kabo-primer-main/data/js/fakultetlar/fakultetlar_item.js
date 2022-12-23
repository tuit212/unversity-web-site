


let kafedra_item = document.querySelector(".news_individual");

function kafedraItem() {

    let resultKafedra = " "

    for (let i = 0; i < 1; i++) {
        resultKafedra += `
        <img src="./data/img/tdpu1.jpeg" alt="">
        <p class="news_date"> <span>Kabo Primer </span>/ 22 МАЙ, 2021 </p>
        <h2 class="news_title">${kafedraArr[i].title}</h2>
        <p>
            ${kafedraArr[i].text}
        </p>
        <a href="kafedra.html" class="active-btn mt-3"><span>
            Yangiliklar ro'yxatiga qaytish
        </span></a>
        
        `
    }

    kafedra_item.innerHTML = resultKafedra
}


kafedraItem();