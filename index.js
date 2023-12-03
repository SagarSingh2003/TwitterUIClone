console.log('hello');
let element = document.querySelector('#show-card');

let textArea = document.querySelector('.text-area');

element.addEventListener('click' , showCard);

textArea.addEventListener('click' , showPostBtn);

function showCard (){
    
    if(document.querySelector('#visible-card').style.display == "flex"){
        document.querySelector('#visible-card').style.display = "none";
    }else{
        document.querySelector('#visible-card').style.display = "flex";
    }
    
}

function showPostBtn() {

    postBtnChange();

    if(document.querySelector('#show-card').style.display == "inline-block" && document.querySelector('.domain-visibility').style.display == "block"){

        document.querySelector('#show-card').style.display = "none";
        document.querySelector('.domain-visibility').style.display = "none";
        document.querySelector('#text-box').rows = "1";

    }else{
        document.querySelector('#show-card').style.display = "inline-block";
        document.querySelector('.domain-visibility').style.display = "block";
        document.querySelector('#text-box').rows = "2";
    }

}

function postBtnChange(){
    if (document.querySelector('.post-btn').style.backgroundColor == "rgb(26, 140, 216)" ){

        document.querySelector('.post-btn').style.backgroundColor = "rgb(29, 108, 161)";
        console.log('hello')
        document.querySelector('.post-btn').style.color = "rgb(173, 173, 173)";
    
    }else{
        document.querySelector('.post-btn').style.backgroundColor = "rgb(26, 140, 216)";
        console.log(document.querySelector('.post-btn').style.backgroundColor)
        document.querySelector('.post-btn').style.color = "white";
    }
}   