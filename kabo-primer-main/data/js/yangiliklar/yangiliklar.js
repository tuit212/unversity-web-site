
let yangiliklar = document.querySelector(".yangiliklar");

// console.log(yangiliklarArr);


function yangiliklarCard() {

    let yangiliklarrResult = " "

    for (let i = 0; i < 3 ; i++) {

        yangiliklarrResult += `
        <div class="col-md-4 mb-4 third_animation invisible">
            <div class="news_item">
                <a href="#link">
                    <div class="news_image">
                        <img src="${yangiliklarArr[i].img}" alt="">
                    </div>
                    <div class="news_caption">
                        <p class="news_date"> ${yangiliklarArr[i].title}</p>
                        <h5>
                            ${yangiliklarArr[i].text}
                        </h5>
                    </div>
                    <button style="background-color: transparent;" class="active-btn mt-3" ><span>Ba'tafsil ma'lumot </span></button>
                </a>
            </div>
        </div>
        `
    }

    yangiliklar.innerHTML = yangiliklarrResult
}

yangiliklarCard();


// function myFunction(e) {
    
    //         e.preventDefault();
    
    //         window.location.href = "./news_item.html"
    
    // }
    
let newCard = document.querySelector(".active-btn");

newCard.addEventListener("click", (e) => {

    e.preventDefault();


    console.log("asadbek");

    window.location.href = "news_item.html";
})


let newsBtn = document.querySelector(".news-btn");

newsBtn.addEventListener("click", (e) => {

    e.preventDefault();

    alert("hali tayyor emas")                               


})


