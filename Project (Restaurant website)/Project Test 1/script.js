let nav = document.getElementById('nav');
let body = document.getElementById('body');
let a = document.getElementById('a');
let a1 = document.getElementById('a1');
let a2 = document.getElementById('a2');
let a3 = document.getElementById('a3');
let a4 = document.getElementById('a4');
let i = document.getElementById('i');
let i1 = document.getElementById('i1');
let img = document.getElementById('img');
let li = document.getElementById('li');
let li1 = document.getElementById('li1');
let li2 = document.getElementById('li2');
let li3 = document.getElementById('li3');
let li4 = document.getElementById('li4');
window.onscroll = function(){
    //console.log(this.scrollY)
    if (this.scrollY >= 640) {
        console.log(this.scrollY);
        a.style.color = "transparent";
        a1.style.color = "transparent";
        a2.style.color = "transparent";
        a3.style.color = "transparent";
        a4.style.color = "transparent";
        i.style.color = "transparent";
        i1.style.color = "transparent";
        img.style.display = "none";
    }
    else if(this.scrollY <= 640) {
        console.log(this.scrollY);
        a.style.color = "#fff";
        a1.style.color = "#fff";
        a2.style.color = "#fff";
        a3.style.color = "#fff";
        a4.style.color = "#fff";
        i.style.color = "#fff";
        i1.style.color = "#fff";
        img.style.display = "block";
    }
}

window.onscroll = function(){
    if(this.scrollY >= 477){
        li.style.color = "#ffb830"
        li1.style.color = "#ffb830"
        li2.style.color = "#ffb830"
        li3.style.color = "#ffb830"
        li4.style.color = "#ffb830"
    }
    else if(this.scrollY <= 477){
        li.style.color = "#fff"
        li1.style.color = "#fff"
        li2.style.color = "#fff"
        li3.style.color = "#fff"
        li4.style.color = "#fff"
    }
}