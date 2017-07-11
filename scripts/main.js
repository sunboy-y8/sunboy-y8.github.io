var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === "images/test-site.png"){
      myImage.setAttribute('src','images/test-site2.gif');
    }else{
        myImage.setAttribute('src','images/test-site.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName (){
    var myName = prompt('please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.innerHTML = 'Hello '+myName;
}

if(!localStorage.getItem('name')){
  setUserName();
}else{
    myHeading.innerHTML = 'Hello '+localStorage.getItem('name');
}

myButton.onclick = function(){
    setUserName();
}