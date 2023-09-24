// function to detect speed of a car.
const speedDetector=(speed)=>{
    speed="car speed";
    const speedLimit=70;
    const demeritPoints=(speed-speedLimit)/5;
    // condition to evaluate demerit points based on car speed.
    if (speed<=speedLimit){
       return ("Ok");
    }
    else if (speed>speedLimit && demeritPoints<12){
        return `points: ${demeritPoints}`;
    }
    else{return "License suspended";
    }
}
//call the function to print result.
console.log(speedDetector())
  
  
  
  