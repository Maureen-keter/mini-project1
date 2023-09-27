// Arrow function for calculating student grades.

const studentGrader=()=>{
    const studentMarks = prompt("enter student marks");
    
// Checks if studentMarks is a number and if the number ranges from 0 to 100.
// It returns "provide valid input" if the "if" condition is not true.
    if(isNaN(studentMarks) || studentMarks>100 || studentMarks<0){
    return ("provide valid input");
}
else

// checks condition for grade based on student's marks.
{
    let grade;
  if(studentMarks>79 &&studentMarks<=100){
   grade="A"
  }
  else if(studentMarks<=79 && studentMarks>=60){
   grade="B"
  }
  else if (studentMarks <=59 && studentMarks>=50){
   grade="C"
  }
  else if (studentMarks<=49 && studentMarks >=40){
    grade="D"
  }
else {
    grade="E"
  }
  return grade;
}
}

console.log(studentGrader()); //calling the function to get the grade.




  
  
  
  
  
  
