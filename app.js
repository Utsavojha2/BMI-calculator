// Weight input
const inputWeight = document.querySelector('#weightNum');
const weightUnit = document.querySelector('#unit');

// Height in feet and inch
const selectFt= document.querySelector('#heightFt');
const selectInch = document.querySelector('#heightInch')

// Height in cm or meters
const inputHeight = document.querySelector('#heightcmmtr');
const selectHeight = document.querySelector('#cmMtr');


// calculate button
const calcBtn = document.querySelector('.submitBtn');

// final result
const result = document.querySelector('.finalResult');

// event listener


calcBtn.addEventListener('click', () => {
    let weight = parseFloat(inputWeight.value);
    if(weightUnit.value === 'lb'){
        weight = getWeightInKg(weight);
    }
   
    const height = getHeightInMeter(parseFloat(selectFt.value), parseFloat(selectInch.value));
    console.log(height);

    const height2 = getHeightInMeter2(parseFloat(inputHeight.value), selectHeight.value);
    console.log(height2);

    if(height && height2){
        return alert('Please Select One only!');
    }
    if(!weight || (!height && !height2)){  // duitai height xaina
        return alert('Please enter the fields');
    }
    
  const bmi = getBMI(weight,height || height2);

  if(bmi < 10){
  result.innerHTML = `
    <h2>Your body mass index is ${bmi}</h2>
     <p><strong>This is considered severely underweight!</strong></p>
  `
  } else if ( bmi >= 10 && bmi < 18.5){
    result.innerHTML = `
     <h2>Your body mass index is ${bmi}</h2>
     <p><strong>This is considered underweight</strong></p>
    `;
  } else if (bmi >= 18.5 && bmi < 24.9){
      result.innerHTML= `
      <h2>Your body mass index is ${bmi}</h2>
     <p><strong>This is considered normal.</strong></p>
      `;

  } else if (bmi >= 24.9 && bmi < 29.9){
    result.innerHTML = `
    <h2>Your body mass index is ${bmi}</h2>
     <p><strong>This is considered overweight</strong></p>
    `;

  } else {
      result.innerHTML = `
      <h2>Your body mass index is ${bmi}</h2>
     <p><strong>This is considered underweight</strong></p>
      `;
    }

})


function getWeightInKg(lbs){
    return lbs / 2.205;
}



function getBMI(weight, height){

  const BMI = weight / (height ** 2);
 return  BMI.toFixed(2);
}

    
    


function getHeightInMeter(feet,inch){
    
const totalValMeter = ((feet || 0) * 12 + (inch || 0)) * 0.0254;
// console.log(totalValMeter);
return totalValMeter;
}

function getHeightInMeter2(value, select){
  if(select === 'cm'){
      return value * 0.01;
  } 
  return value;
}

