<html>
<body>
<p id="demo"></p>

<script>
    function ex3(){
        var num1 = prompt("Enter first number");
        var num2 = prompt("Enter second number");
        var sum = num1 + num2;
        var sub = num1 - num2;
        var mult = num1 * num2;
        var div = num1 / num2;
        var mod = num1 % num2;
        document.getElementById("demo").innerHTML = "Sum is " + sum + "<br> subtraction is" + sub +
        "<br> multipied is" + mult + "<br> divided is" + div + "<br> modulated is" + mod;
    }
    ex3.();
</script>
</body>
</html>