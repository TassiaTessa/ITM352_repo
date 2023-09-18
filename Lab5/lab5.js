// Declare variables per lab 5.1 instructions 
let age=21; 
let fav_num=7;
let day_of_birth=24;
let month_of_birth=5;

//Define calculations 
let calc1= age + fav_num / day_of_birth * month_of_birth;
let calc2= (age + fav_num) / day_of_birth * month_of_birth;

// Remember PEMDAS

//output calc 1 & 2 to the DOM 
document.getElementById("result1").innerHTML = calc1;
document.getElementById("result2").innerHTML = calc2;

// rest of the lab instructions will be in discord 