
let profil__top = document.querySelector(".profil__top");



let dataBase = [
    {
        "img": "./data/img/accound.jpg",
        "name": "asadbek anvarov",
        "description" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At aliquid quo, quis laboriosam nemo alias necessitatibus porro maiores atque iste?",
    },
]



function dataBaseHtml() {

    let dataBaseHtmlRes = "";

    for (let i = 0; i < dataBase.length; i++) {
        
        dataBaseHtmlRes = `

        <div class="profil__top-img">
            <img src="${dataBase[i].img}" alt="${dataBase[i].name}">
        </div>
        <div class="profil__top-content">
            <h3>
                ${dataBase[i].name}
            </h3>
            <p>
                ${dataBase[i].description}
            </p>
        </div>
        <div class="profil__top-chanchel">
            <button title="Tahrirlash">Edit</button>
            <button title="Saqlash">Save</button>
        </div>
        `
    }
    profil__top.innerHTML = dataBaseHtmlRes
}

dataBaseHtml();






