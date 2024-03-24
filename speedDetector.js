//declare a function and name it speedDetector
// use if ...else condition to determine the speed
function speedDetector(speed) {
  let speedchecker;
  if (speed <= 70){
    speedchecker = "OK";
 } else { 
    speedchecker = Math.floor((speed - 70) / 5);
    if ((speed -70) / 5 <= 12) {
        return `Points: ${speedchecker}`;
    }else {
        return "Lisence Suspended";
    }
 }
 return speedchecker;
 }
 //console log to run
 console.log(speedDetector(140))