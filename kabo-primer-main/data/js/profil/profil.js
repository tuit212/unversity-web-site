



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
                    <form class="modal__form">
                        <label for="">
                            Ismingiz <input type="text"  value="${dataBase[i].name}"
                            id="formName" >
                        </label>
                        <label for="">
                            familangiz <input type="text" value="${dataBase[i].lastName}" id="formFullName">
                        </label>
                        <label for="">
                            uziz haqiqiz ma'lumot 
                            <input type="text" value="salom" id="formTextContent">

                            </input>
                        </label>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" data-bs-dismiss="modal">Close</button>
                    <button type="button" id="dataBaseSave" data-bs-dismiss="modal" 
                    onclick="editModalGroupValue()">
                        Save changes
                    </button>
                </div>
                </div>
            </div>
        `
    }
 



    edit__modal.innerHTML = editModalGroup
}

dataBaseEditModal();
// id="formTextContent"



// console.log(document.querySelector('#formName').defaultValue)

function editModalGroupValue(){

    let editGroupName = document.querySelector('#formName');
    let editGroupFullName = document.querySelector('#formFullName');
    let editGroupTextContent = document.querySelector('#formTextContentf');

    // console.log(editGroupName, editGroupFullName);


    let editGroupNameValue = editGroupName.value
    let editGroupFullNameValue = editGroupFullName.value
    let editGroupTextContentValue = editGroupTextContent.value

    console.log(editGroupNameValue , editGroupFullNameValue );

    let arrEditGroup = {
        editName: editGroupNameValue,
        editFullName : editGroupFullNameValue,
        editTextContent: editGroupTextContentValue
    }

    // arrEdit editGroupData.push(arrEditGroup);

    console.log(editGroupData.push(arrEditGroup));


}






