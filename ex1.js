/*Tutorial 4
Example 1 JavaScript code
*/

<p id="demo"></p>

<script>
    function classStanding() {
        var student = prompt("Please enter your name","name");
        var grade = prompt("Please enter your grade", "units");
        var text;
        if (grade >= 30) {
            text = "Hello " + student + " Your grade standing is Freshman";}
        else if (grade < 30 && grade >= 60) {
            text = "Hello " + student + " Your grade standing is Sophmore";
        }
        else if (grade < 60 && grade >= 90) {
            text = "Hello " + student + " Your grade standing is Junior";
        }
        else {
            text = "Hello " + student + " Your grade standing is Senior";
        }
        document.getElementById("demo").innerHTML = text;

    }
    classStanding();
</script>