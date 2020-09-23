<html>
<body>
<p id="demo"></p>

<script>
    function ex4(){
        var pass = prompt("Enter password", "secret");
        if (pass != "secret") {
            pass = prompt("Error reenter password", "secret");
            if (pass != "secret") {
                pass = prompt("Error reenter password", "secret");
                if (pass != "secret"){
                    pass = prompt("Error reenter password", "secret");
                    if (pass != "secret"){
                        document.getElementById("demo").innerHTML = "Your account is locked!  You failed to enter the correct password 3 times";
                    }
                    else {
                        document.getElementById("demo").innerHTML = "You entered the correct password after 3 attempts.";
                    }
                }
                else {
                    document.getElementById("demo").innerHTML = "You entered the correct password after 2 attempts.";}
            }
            else {
                document.getElementById("demo").innerHTML = "You entered the correct password after 1 attempt.";}
        }
        else {
            document.getElementById("demo").innerHTML = "You entered the correct password on the first try.";}
    }
    ex4();
</script>

</body>
</html>