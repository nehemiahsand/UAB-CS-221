window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // TODO: Complete the function
   // Add an event listener to the convertButton button that calls the accessText function when clicked
   document.getElementById("convertButton").addEventListener("click", accessText);
   // Add an event listener to the resetButton button that calls the resetConverter function when clicked
   document.getElementById("resetButton").addEventListener("click", resetConverter);
}

function accessText() {
   // Create three variables to hold the contents of the input fields and the p tag
   let celsiusInput = document.getElementById("cInput");
   let fahrenheitInput = document.getElementById("fInput");
   let errorM = document.getElementById("errorMessage");

   // Make two shorthands for the number value of the input fields
   let celsiusInputValue = parseFloat(celsiusInput.value);
   let fahrenheitInputValue = parseFloat(fahrenheitInput.value);

   // Check if the Celsius input field is blank
   if(celsiusInput.value == "") {
      // If it is blank and the Fahrenheit input field has a number...
      if(!isNaN(fahrenheitInputValue)) {
         //...then set the Celsius input field to the correct conversion using the function
         celsiusInput.value = convertFtoC(fahrenheitInputValue);
      }
      else {
         // If it isnt a numbe then print out the error message to the user
         errorM.innerText = (`${fahrenheitInput.value} is not a number`);
      }
   }
   else {
      // If the Celsius input field has a number...
      if(!isNaN(celsiusInputValue)) {
         //...then set the Fahrenheit input field to the correct conversion using the other function
         fahrenheitInput.value = convertCtoF(parseFloat(celsiusInput.value));
      }
      else {
         // If it isnt a numbe then print out the error message to the user
         errorM.innerText = (`${celsiusInput.value} is not a number`);
      }
   }

   // Create a variable to hold the contents of the weatherImage class
   let weatherImg = document.getElementById("weatherImage");
   // Check if the contents of the Fahrenheit input field is less than 32
   if(parseFloat(fahrenheitInput.value) < 32) {
      // If so change the photo to be cold.png
      weatherImg.src = "images/cold.png";
   }
   // Check if the contents of the Fahrenheit input field is less than 50
   else if(parseFloat(fahrenheitInput.value) < 50) {
      // If so change the photo to be cool.png
      weatherImg.src = "images/cool.png";
   }
   else {
      // Else keep the photo at warm.png
      weatherImg.src = "images/warm.png";
   }
}

function resetConverter() {
   // Reset the input fields to enter again
   document.getElementById("cInput").value = "";
   document.getElementById("fInput").value = "";
}

function convertCtoF(degreesCelsius) {
   // TODO: Complete the function
   return ((degreesCelsius * 9 / 5) + 32);
}

function convertFtoC(degreesFahrenheit) {
   // TODO: Complete the function
   return ((degreesFahrenheit - 32) * 5 / 9);
}
