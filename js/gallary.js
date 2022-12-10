var car = document.getElementById("car1");
var car2 = document.getElementById("car2");
var car3 = document.getElementById("car3");
var car4 = document.getElementById("car4");
var car5 = document.getElementById("car5");
 

car.onclick = function(){
    car.style.transition = "1s ease-out";
    
    car.style.width = "100%";
    car2.style.width = "10%";
    car3.style.width = "10%";
    car4.style.width = "10%";
    car5.style.width = "10%";
    
}
car2.onclick = function(){
    car2.style.transition = "1s ease-out";
    car2.style.width = "100%";
    car.style.width = "10%";
    car3.style.width = "10%";
    car4.style.width = "10%";
    car5.style.width = "10%";
    
}
car3.onclick = function(){
    car3.style.transition = "1s ease-out";
    car3.style.width = "100%";
    car.style.width = "10%";
    car2.style.width = "10%";
    car4.style.width = "10%";
    car5.style.width = "10%";

    
}
car4.onclick = function(){
    car4.style.transition = "1s ease-out";
    car4.style.width = "100%";
    car.style.width = "10%";
    car2.style.width = "10%";
    car3.style.width = "10%";
    car5.style.width = "10%";

    
   
}
car5.onclick = function(){
    car5.style.transition = "1s ease-out";
    car5.style.width = "100%";
    car.style.width = "10%";
    car2.style.width = "10%";
    car3.style.width = "10%";
    car4.style.width = "10%";

    
}