<html>
<body>
<p id="demo"></p>

<script>
    function ex6() {
        var hr = prompt("Enter the hours");
        var sec;
        var min;
        if (hr < 0) {
            document.getElementById("demo").innerHTML = "error";
        }
        else {
            min = prompt("Enter the minutes");
            if (min < 0) {
                document.getElementById("demo").innerHTML = "error";
            }
            else {
                sec = prompt("Enter the seconds");
                if (sec < 0) {
                    document.getElementById("demo").innerHTML = "error";
                }
            }
        }
        document.getElementById("demo").innerHTML = "Time input " + hr + "h" + min + "m" + sec + "s <br>One second later " + sec + 1;
    }
    ex6.()
</script>

</body>
</html>