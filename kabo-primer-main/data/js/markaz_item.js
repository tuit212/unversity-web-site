

let advantage_in = document.querySelector(".advantage__cardss");

function markazResult() {
    
    let markazResultRes = " "

    for (let i = 0; i < 4 ; i++) {
        markazResultRes += `
            <div class="col-md-6 mt-4 head first_animation invisible">
                <div class="advantage_in">
                    <div class="pic">
                        <img src="./data/img/tdpu1.jpeg" alt="persons" style="height: 100%;">
                    </div>
                    <div class="content pt-2">
                        <h4>
                            ${arr[i].title}
                        </h4>
                        <p>
                            ${arr[i].text.slice(0,110)}
                        </p>
                    </div>
                </div>
            </div>
            
        `
    }

    advantage_in.innerHTML = markazResultRes

}

markazResult();