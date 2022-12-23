

// let videoArr = [
//     {
//         video: 'https://youtu.be/d3KNrc9Gdk4'
//     }
// ];



let vedioAdd = document.querySelector(".video__card-add");
let vedioAddName = document.querySelector("#ism");
let vedioAddLesson = document.querySelector("#dars_nomi");
let vedioAddLink = document.querySelector("#video_link");

let videoArrays = [
    
];





let vedio__itemCardTop = document.querySelector(".vedio__item-card-top");

function getVideo() {

    let videoRes = ""

    for (let i = 0; i <videoArrays.length; i++) {
        videoRes += `

        <div class="card">
            <iframe height="400" width="400" 
            src="${videoArrays[i].video}" 
            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `
    }

    vedio__itemCardTop.innerHTML = videoRes

}


vedioAdd.addEventListener("click", (e) => {
    e.preventDefault();

    let vedioName = vedioAddName.value;
    let vedioLesson = vedioAddLesson.value;
    let vedioLink = vedioAddLink.value;


    let videoArr = [
        {
            videoNames: vedioName,
            vedioLessons: vedioLesson,
            vedioLinks: vedioLink
        }
    ];

    let videoBigArr = videoArrays.push(...videoArr);
    

    console.log(videoArrays);

    getVideo();


})

// console.log(videoArr);