/*Tutorial 4
Example 1 JavaScript code
*/

<p id="demo"></p>

<script>
    function classStanding() {
        var student = prompt("Please enter your name","name");
        var grade = prompt("Please enter your grade", "units");
        var text;
        if (grade == 30) {
            text = "Hello " + student + " Your grade standing is Freshman"}
        document.getElementById("demo").innerHTML = text;
    }
    classStanding();
</script>