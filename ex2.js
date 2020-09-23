/*Tutorial 4
Example 2 JavaScript code
*/

<html>
<body>
<p id="demo"></p>

<script>
    function ex2(){
        var date = prompt("Enter the date", "sun");
        var text;
        var text1
        switch(date) {
            case "sun":
                text = "You entered: " + date;
                text1 = "The following day is: " + "mon";
                break;
            case "mon":
                text = "You entered: " + date;
                text1 = "The following day is: " + "tue";
                break;
            case "tue":
                text = "You entered: " + date;
                text1 = "The following day is: " + "wed";
                break;
            case "wed":
                text = "You entered: " + date;
                text1 = "The following day is: " + "thu";
                break;
            case "thu":
                text = "You entered: " + date;
                text1 = "The following day is: " + "fri";
                break;
            case "fri":
                text = "You entered: " + date;
                text1 = "The following day is: " + "sat";
                break;
            case "sat":
                text = "You entered: " + date;
                text1 = "The following day is: " + "sun";
                break;
            default:
                text = "Invalid";
                text1 = "Please try again";
        } 
        document.getElementById("demo").innerHTML = text + "<br>" + text1;
    }
    ex2();
</script>
</body>
</html>