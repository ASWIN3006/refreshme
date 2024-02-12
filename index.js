var randomNum1 = Math.floor(Math.random() * 6 ) + 1;

var randomImgNum1 ="dice" +randomNum1 +".png";

var randomImgSource1 = "images/" +randomImgNum1 ;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute('src', randomImgSource1);




var randomNum2 = Math.floor(Math.random() * 6 ) + 1;

var randomImgNum2 ="dice" +randomNum2 +".png";

var randomImgSource2 = "images/" +randomImgNum2 ;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute('src', randomImgSource2);


if(randomNum1 > randomNum2){
    document.querySelectorAll("h2")[0].innerHTML = "Player 1 tha da pass";
}
else if(randomNum1 === randomNum2){
    document.querySelectorAll("h2")[0].innerHTML = "Equal da refresh pannnu";
}
else{
    document.querySelectorAll("h2")[0].innerHTML = "Palyer 2 tha da pass";
}