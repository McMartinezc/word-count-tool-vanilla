const btn = document.getElementById("btn");
const word = document.getElementById("str");

//maxlength de 50
word.setAttribute("maxlength", "50");

btn.addEventListener("click", () => {
  const inputValue = word.value;
  
  const output = document.getElementById("output");

  if (inputValue.length > 0) {
    if (inputValue.length <= 50) {
      output.textContent = `La palabra tiene una longitud de: ${inputValue.length}`;
    } else {
      output.textContent = `La palabra supera la longitud permitida.`;
    }
  } else {
    output.textContent = `Por favor, ingresa una palabra.`;
  }
});
