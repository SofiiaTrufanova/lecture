/*let age = prompt("How old are you?", '');
if(age <= 17){confirm ("Do you study at school?");
} else if (age >17 && age < 25){confirm ("Do you study at university?");
} else if (age >=25 && age < 60){confirm ("Do you have a job?");
} else {confirm ("What are you doing?");
}*/

/*let Age = prompt('How old are you?', 0)
switch(+Age){
    case 1 (Age <= 17) :
        alert('Do you study at school?');
        break;
    case 2 (Age > 17 && Age < 25):
        alert('Do you sudy at university?');
        break;
    case 3 (Age >= 25 && Age < 60) :
        alert('Do you have a job?');
        break;
    case 4 (Age >60):
        alert('What are you doing?');
        break;
 }*/


 let Age = prompt('How old are you?', 0) 
 let answer; 
if(Age <= 17){ 
    answer = "Do you study at school?"; } 
else if (Age > 17 && Age < 25){ 
    answer = "Do you study at university?"; } 
else if (Age >= 25 && Age < 60){ 
        answer = "Do you have a job?"; } 
else { answer = "What are you doing?"; } 
alert (answer);