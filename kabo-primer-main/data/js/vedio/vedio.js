let urlVideo = "https://www.youtube.com/embed/";

let videoArrays = [
    {
      "id": 1,
      "title": "edit",
      "url": "https://www.youtube.com/embed/80fwYU6ed9k",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952",
      "text": "lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem"
    },
    {
        "id": 2,
        "title": "edit",
        "url": "https://www.youtube.com/embed/80fwYU6ed9k",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952",
        "text": "lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem"
      },
      {
        "id": 3,
        "title": "edit",
        "url": "https://www.youtube.com/embed/80fwYU6ed9k",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952",
        "text": "lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem"
      },
]


let vedio__itemCardTop = document.querySelector(".vedio__item-card");
let vedioAdd = document.querySelector(".video__card-add");
let vedioAddName = document.querySelector("#ism");
let vedioAddLesson = document.querySelector("#dars_nomi");
let vedioAddLink = document.querySelector("#video_link");


function getVideo() {

    let videoRes = ""

    for (let i = 0; i < videoArrays.length; i++) {

        let ifrem =  document.createElement('iframe')
        ifrem.style.width = '350px'
        ifrem.style.height = '200px'
        ifrem.setAttribute('src',videoArrays[i].url)

        videoRes += `
        <div class="vedio__item-card-top profile-video">
            <li>
                <div class="vedio-top">
                    <iframe
                    src=" ${videoArrays[i].url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;  picture-in-picture" allowfullscreen>
                    </iframe>
                </div>
                <div class="vedio-body">
                    <h3>${videoArrays[i].title}.</h3>
                    <p>
                        ${videoArrays[i].text}
                    </p>
                </div>
                <div class="card__box">
                    <button class="video__card-edit" onclick="editCards()">
                        edit
                    </button> 
                    <button class="video__card-uchir" onclick="deleteCards(${videoArrays[i].id} )">
                        o'chirish
                    </button> 
                    <button class="video__card-edit ml-5">
                        <img src="./data/img/accound.jpg" alt="" width="30" height="30">
                    </button> 
                </div>
            </li>
        </div>

        `
        // console.log(videoArrays[i].id);

        vedio__itemCardTop.append(ifrem)
    }

    
    
    
    vedio__itemCardTop.innerHTML = videoRes
}
getVideo();


vedioAdd.addEventListener("click", (e) => {
    e.preventDefault();

    let vedioName = vedioAddName.value;
    let vedioLesson = vedioAddLesson.value;
    let vedioLink = vedioAddLink.value;

    let vidoLiksCut = vedioLink.slice(17)

    const d = new Date();
    let time = d.getMilliseconds();


    for (const key in videoArrays) {

        let a = videoArrays[key];
    
        for (const key2 in a) {
            if(key2 === 'url') {
                let u = a[key2];
                
                let url = u.slice(0, 30);
                var realUrl = url.concat(vidoLiksCut);
                
            }
        }
    }

 

// console.log(time);
    let videoArr = [
        {   
            "id": time,
            "title": vedioName,
            "text" : vedioLesson,
            "url": realUrl
        }
    ];


    let key2 = "https://www.youtube.com/embed/";

    
    let videoBigArr = videoArrays.push(...videoArr);


    getVideo();


})

// console.log(videoArrays);


// edit video cards start


function editCards(){

}
// edit video cards end
// edit video cards start

function deleteCards(id){

    // e.preventDefault();


    // console.log(this.videoArrays);

    // let deleteVideo = videoArrays.filter(todo => {
    //     // todo.id == !id;

    //     return todo.id == !id;

    // })

    
    // console.log(deleteVideo);

    
    const deletedTodo = videoArrays.findIndex(todo => {
        todo.id == !id
        

        
    })  
    
    console.log(id);



    
    // const deletedTodo = videoArrays.filter((item, i) => {
    //     return item.id == !id
    // })
    
    // console.log(deletedTodo);
    

    getVideo(); 



}

// edit video cards end
// edit video cards start

function saveCards(){
    // console.log("saveCards");


}

// edit video cards end

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);








// <button class="video__card-save" onclick="saveCards()">
//    save
// </button> 