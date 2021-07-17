let menu = document.querySelectorAll(".menu .nav .item");
let main = document.querySelectorAll(".main .main-container");


function resetActive(){
    for(let i=0; i<menu.length; i++)
        menu[i].classList.remove("active");
}

for(let j=0; j<menu.length; j++){
    menu[j].addEventListener("click",function(){
        resetActive();
        this.classList.add("active");
        main[j].scrollIntoView();
});
}

let bandCards = document.querySelectorAll(".band-content .card");

let forTheFirstTime = new Audio('./src/assets/mp3/for_the_first_time.mp3');
let itsTime = new Audio('./src/assets/mp3/its_time.mp3');
let secrets = new Audio('./src/assets/mp3/secrets.mp3');
let shedATear = new Audio('./src/assets/mp3/shed_a_tear.mp3');
let ohMySoul = new Audio('./src/assets/mp3/oh_my_soul.mp3');

let songs = [forTheFirstTime,itsTime,secrets,shedATear,ohMySoul];

for(let k=0; k<bandCards.length; k++){
    bandCards[k].addEventListener("mouseenter",function(){
        songs[k].play();
    });
    bandCards[k].addEventListener("mouseleave",function(){
        songs[k].pause();
    });
}
