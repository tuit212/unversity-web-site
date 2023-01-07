
let urlVideo = "https://www.youtube.com/embed/";

let videoArrays = [
    {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://www.youtube.com/embed/80fwYU6ed9k",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952",
      "text": "lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://www.youtube.com/embed/dBRv7OxXuzA",
      "thumbnailUrl": "https://via.placeholder.com/150/771796",
      "text": "lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem"
      
    },
    {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://www.youtube.com/embed/0X0kovjzLrw",
        "thumbnailUrl": "https://via.placeholder.com/150/771796",
        "text": "lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem"
    },
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://www.youtube.com/embed/80fwYU6ed9k",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952",
        "text": "lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem"
      },
      {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://www.youtube.com/embed/dBRv7OxXuzA",
        "thumbnailUrl": "https://via.placeholder.com/150/771796",
        "text": "lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem"
        
      },
      {
          "albumId": 1,
          "id": 2,
          "title": "reprehenderit est deserunt velit ipsam",
          "url": "https://www.youtube.com/embed/0X0kovjzLrw",
          "thumbnailUrl": "https://via.placeholder.com/150/771796",
          "text": "lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem"
      },
      {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://www.youtube.com/embed/0X0kovjzLrw",
        "thumbnailUrl": "https://via.placeholder.com/150/771796",
        "text": "lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem"
    },


  
  ]




let vedio__itemCardTop = document.querySelector(".vedio__item-card-top");
let vedioAdd = document.querySelector(".video__card-add");
let vedioAddName = document.querySelector("#ism");
let vedioAddLesson = document.querySelector("#dars_nomi");
let vedioAddLink = document.querySelector("#video_link");

    


function getVideo() {

    let videoRes = ""

    for (let i = 0; i < videoArrays.length; i++) {

        let ifrem =  document.createElement('iframe')
        ifrem.style.width = '200px'
        ifrem.style.height = '200px'
        ifrem.setAttribute('src',videoArrays[i].url)



        videoRes += `

        <li style="width: 32%;">
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
        </li>

        


        `
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



    for (const key in videoArrays) {

        let a = videoArrays[key];
    
        for (const key2 in a) {
            if(key2 === 'url') {
                let u = a[key2];
                let url = u.slice(0, 30);
                var realUrl = url.concat(vidoLiksCut);
                // console.log();
            }
        }
    }



    let videoArr = [
        {   
            "albumId": 1,
            "id": 2,
            "title": vedioName,
            "url": realUrl
        }
    ];


    let key2 = "https://www.youtube.com/embed/";

    
    let videoBigArr = videoArrays.push(...videoArr);

    console.log(videoArrays);

    getVideo();


})


console.log(videoArrays);












/* <li class="higher__item">

    <iframe
        src=" ${videoArrays[i].url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen>
    </iframe>
    <h3 class="higher__item__title"> 
        ${videoArrays[i].title}
    </h3> 
    <p class="higher__item__text"> 
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem enim dolorum odit iure laudantium consectetur repellendus! 
    </p> 
    <p class="higher__item__text2"> 
        19$ 
    </p> 
</li> */