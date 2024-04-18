const number = document.getElementsByClassName("numbers")[0];
const mainCard = document.getElementById("main");
const thankYouCard = document.getElementById("thankyou");
const button = document.getElementById("submit");
const textvalue = document.getElementById("ratingvalue");

number.addEventListener("click",function (e){
    const value = e.target.textContent;
    textvalue.textContent = value;

    const clicked = e.target;
    const allcircles = number.querySelectorAll(".circle");

    allcircles.forEach(item => item.classList.remove("circle-selected"));
    clicked.classList.add("circle-selected");

    button.addEventListener("click",()=>{
        mainCard.classList.add("hidden");
        thankYouCard.classList.remove("hidden");
    });

});

