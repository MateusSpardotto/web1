let displayValue = "";

function appendSymbol(symbol)
{
  displayValue += symbol;
  updateDisplay();
}

function appendNumber(number)
{
  displayValue += number;
  updateDisplay();
}

function clearDisplay()
{
  displayValue = "";
  updateDisplay();
}

function calcular()
{
  try
  {
    const result = eval(displayValue);
    displayValue = result;
    updateDisplay();
  }
  catch (error)
  {
    displayValue = "Erro";
    updateDisplay();
  }
}

function updateDisplay()
{
  document.getElementById("display").innerText = displayValue;
}
