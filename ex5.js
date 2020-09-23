<html>
<body>
<p id="demo"></p>

<script>
    function ex5(){
        var num = prompt("Please enter a number", "0");
        var text;
        var i;
        for (i = 0; i < 11; i++) {
            text += num + " x " + i + "<br>";
        }
        document.getElementById("demo").innerHTML = text;
    }
    ex5.()
</script>

</body>
</html>