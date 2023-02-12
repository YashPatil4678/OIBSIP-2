const calculateTemp = ( ) => {

    const numberTemp = document.getElementById('temp').value;
   // console.log(numberTemp);

   const tempselected = document.getElementById('temp_diff');
   const valueTemp = temp_diff.options[tempselected.selectedIndex].value;

   
 // Convert temperature from Celcius to Fahrenheit
 const celTofah = (cel) => {
    let fahrenheit = (cel * (9 / 5) + 32);
    return fahrenheit;
}

// Convert temperature from Fahrenheit to Celsius
const fahTocel = (fah) => {
    let celsius = ((fah - 32) * 5 / 9);
    return celsius;
}
   let result;
    if (valueTemp == "cel") {
        result = celTofah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Fahrenheit`;
    } else {
        result = fahTocel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Celsius`;
    }
}
   

