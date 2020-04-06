'use strict'
// task 1
let a =document.querySelector(".no-scroll");
let b =document.querySelector(".page-splash");
let splashHide=document.querySelector(".page-splash").hidden = false;
console.log(splashHide);

if(!splashHide){
    b.addEventListener("click", hideSplashScreen);
}else{
    b.addEventListener("click", showSplashScreen);
}

function showSplashScreen(){
    a.classList.add("no-scroll");
    b.classList.add("page-splash");
    console.log(a);
}
function hideSplashScreen(){
    a.classList.remove("no-scroll");
    b.classList.remove("page-splash");
}

//task 2
function createCommentElement(){
    let comment=document.querySelector('[name=text]').value;
    let elem= document.createElement('div')
    elem.innerHTML=comment;
    document.getElementsByTagName('div')[0].append(elem);
}

