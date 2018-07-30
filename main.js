document.querySelector("#reset-field button").addEventListener('click',function(){
  // TASK #1
  var input = document.querySelector('#reset-field input');
  input.value = ""
})


document.querySelector("#validate-field button").addEventListener('click',function(){
  // TASK #2
  var input = document.querySelector('#validate-field input');
  var showMessage = document.querySelector('.flash-message');
  var mensaje = input.value;

  if(mensaje.length >= 6){
    showMessage.textContent = "Field Valid"
    showMessage.className = "flash-message valid"
  } else if(mensaje.length < 6){
    showMessage.textContent = "Input not long enough"
    showMessage.className = "flash-message invalid"
  }
})


document.querySelector("#calculate-items button").addEventListener('click',function(){
  // TASK #3
  var cheboxes = document.querySelectorAll('.cars-list input');
  var showSuma = document.querySelector('.sum-total');
  var suma = 0;

  cheboxes.forEach(function(check){
    if(check.checked === true){
      var valor = parseInt(check.value);
    
      suma += valor;
    }
  })
  showSuma.textContent = "$ " + suma;
})


document.querySelector("#select-to-show-more button").addEventListener('click',function(){
  // TASK #4
var cars = document.querySelectorAll('.selection option');
var imgCar = document.createElement('img')

console.log(imgCar);
})