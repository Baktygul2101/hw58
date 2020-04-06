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
function createCommentElement(comment){
     comment=document.querySelector('[name=text]').value;
    let elem= document.createElement('p')
    let name= document.createElement('href')
    elem.innerHTML=comment;
    name.innerHTML="Someone newUser";
    name.style.fontWeight='bold';
    document.getElementsByTagName('div')[0].append(name, elem);
   
}

//task 3
/*function createPostElement(){
    const html =('<div>'+'<img class="d-block w-100" src="'+imageUrl+'" alt="Post image">'+'</div>');
    let element= document.createElement('div')
    element.innerHTML=post;
    document.getElementsByTagName('div')[0].append(element);
}*/

//task 4
function addPost(postElement){
    postElement=document.querySelector('[name= post]').value;
    let el= document.createElement('p')
    el.innerHTML=postElement;
    document.getElementsByClassName('post-div')[0].appendChild(el);
}