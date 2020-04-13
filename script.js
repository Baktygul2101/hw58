'use strict'


  //task 1
  let user = {
    id:1,
    name: 'Umut',
    email: 'uma@mail.ru',
    isAuthorised: false
};
console.log(user);


//task 2
let post = {
    id:1, //обращение к айди  объекта юзера
    title: 'post 1',
    userId:1,
    time: 2020,
    isLiked: false
};
console.log(post);


//task 3
let comment = {
    userId:3, //обращение к айди  объекта юзера
    postId:1, //обращение к айди  объекта поста
    text: 'my first comment'
};
console.log(comment);

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



//task 4
function addPost(postElement){
    postElement=document.querySelector('[name= post]').value;
    postPhoto=document.querySelector('[name= photo]').value;
    let el= document.createElement('p')
    let ele= document.createElement('img')
    el.innerHTML=postElement;
    ele.innerHTML=postPhoto;
    document.getElementsByClassName('post-div')[0].appendChild(el,ele);
}


// HW59 task1
function toggleHurt(){
    document.getElementById('heart').classList.toggle("redColor");
}

// task2
const doubleClick = document.querySelector("img");
doubleClick.ondblclick=function(){ 
console.log("here double click");
toggleHurt();
}

// task3
function togglePost(){
    document.getElementById('publ').classList.toggle("mark");

}
//
function showForm() {
    document.getElementById("comm").hidden = false;
    document.getElementById("link").hidden = true;
   }

function toggleComment(){
    document.getElementById('cmn').classList.toggle(showForm());

}