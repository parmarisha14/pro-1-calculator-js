 function appendValue(val) {
      document.getElementById('number').value += val;
    }

    function clearInput() {
      document.getElementById('number').value = '';
    }

    function calculate() {
      const input = document.getElementById('number').value;
      
        const result = eval(input);
        document.getElementById('number').value = result;
       
    }