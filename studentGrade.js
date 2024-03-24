// declare a variable
//declare a function assign a value
//use if... else conditionals 
let marks
function studentscore (marks) {
   if (marks >= 79) {
    return"A"
  }else if(marks < 79 && marks >= 60){
    return"B"
  }else if( marks < 60 && marks >=49){
    return"C"
  }else if( marks < 49 && marks >=40){
    return"D"
  }else if ( marks < 40){
    return"E"
  }

}
// console.log to display the out put
console.log(studentscore(45))


