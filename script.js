
  function solve(val) {
    document.getElementById('result').value += val;
  }

  function clearDisplay() {
    document.getElementById('result').value = " " ;
  }

  function back()
  {
    var currentDisplayValue=document.getElementById("result").value;
    document.getElementById('result').value=currentDisplayValue.slice(0,-1);
  }

  function Result() {
    try {
      document.getElementById('result').value = eval(document.getElementById('result').value);
    } catch (error) {
      document.getElementById('result').value = 'Error';
    }
  }