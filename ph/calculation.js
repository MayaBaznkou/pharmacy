var heightInput = document.querySelector(".heightInput");
var weightInput = document.querySelector(".weightInput");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var statement = document.querySelector(".result-sta");
var BMI, height, weight;

calculateButton.addEventListener("click", ()=>{
    
    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight/(height**2); 
    result.innerText = BMI;

    if(BMI < 18.5){
        statement.innerText = "Your BMI : Weight loss";    
    }else if((BMI > 18.5) && (BMI < 24.9)){
        statement.innerText = "Your BMI : Normal or healthy weight";
    }else if((BMI > 25) && (BMI < 29.9 )){
        statement.innerText = "Your BMI : Increase in weight";
    }else{
        statement.innerText = "Your BMI : the obese ";
    }
});