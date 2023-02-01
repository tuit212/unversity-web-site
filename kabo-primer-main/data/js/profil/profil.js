



let profil__top = document.querySelector(".profil__top");

const pofilLocatName = localStorage.getItem('loginName')
const pofilLocatFullName = localStorage.getItem('loginFullName')
const pofilLocatEmail = localStorage.getItem('loginEmail')





let dataBase = [
    {
        "img": "./data/img/profil accound/accound.svg",
        "name": pofilLocatName,
        "lastName": pofilLocatFullName,
        "email": pofilLocatEmail,
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
                ${dataBase[i].name}  ${dataBase[i].lastName}
            </h3>
            <p>
                ${dataBase[i].email}
            </p>
        </div>
        <div class="profil__top-chanchel">
            <button type="button" data-bs-toggle="modal"               data-bs-target="#exampleModal">
               edit
            </button>
        </div>
        `
    }
    profil__top.innerHTML = dataBaseHtmlRes
}

dataBaseHtml();




function dataBaseEdit(){

}

const edit__modal = document.querySelector('.edit-modal');

function dataBaseEditModal(){

    let editModalGroup = "";

    for (let i = 0; i < dataBase.length; i++) {


        editModalGroup = `
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <form >
                        <label for="">
                            Ismingiz <input type="text" value="${dataBase[i].name}">
                        </label>
                        <label for="">
                            familangiz <input type="text" value="${dataBase[i].lastName}">
                        </label>
                        <label for="">
                            emailingiz <input type="email" name="" id="" 
                            value="${dataBase[i].email}">
                        </label>
                        <label for="">
                            uziz haqiqiz ma'lumot 
                            <textarea name="" id="" cols="30" rows="3">
                                
                            </textarea>
                        </label>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" data-bs-dismiss="modal">Close</button>
                    <button type="button" id="dataBaseSave" data-bs-dismiss="modal">Save changes</button>
                </div>
                </div>
            </div>
        `
    }



    edit__modal.innerHTML = editModalGroup
}

dataBaseEditModal();



let dataBaseSave = {
    name: 'dataBaseSave',
}




