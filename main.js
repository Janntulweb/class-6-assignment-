var button =document.getElementById("btn")
button.addEventListener('click',function() {
    var mark = document.getElementById("mark").value
if(mark>=80){
    var result ="Congratulation You Got A+"
}
else if (mark>70||79<=mark){
    var result="Congratulation You Got A"
}
else if (mark>=60||69<=mark){
    var result="Congratulation You Got A-"
}
else if (mark>=50||59<=mark){
    var result="Congratulation You Got B"
}
else if (mark>=40||49<=mark){
   var result="Congratulation You Got B-"
}
else if (mark>=33||39<=mark){
   var result="Congratulation You Got C"
}
else{
    result="Sorry!Try Again For A Good Result"
}
document.getElementById("result").innerHTML=result 
})