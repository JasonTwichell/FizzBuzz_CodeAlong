//Step 1: Wire up an event handler for the fizz buzz button
document.getElementById("btnFizzBuzz").addEventListener("click", function(){
    //Step 2: Store the first number into a local variable named fizzNum
    let fizzNum = parseInt(document.getElementById("fizzInput").value);

    //Step 3: Store the second number into a local variable named buzzNum
    let buzzNum = parseInt(document.getElementById("buzzInput").value);

    //Step 4: Add the For loop that goes from 1 to 100 and performs the FizzBuzz alogorithm
    let output = "";
    for(let loop = 1; loop <= 100; loop++){
        //Step 5: Use an if/else if/else to build a string
        if(loop % fizzNum == 0)
        {
            output += "<span class='fizz'>Fizz</span>, ";
        }
        else if(loop % buzzNum == 0){
            output += "<span class='buzz'>Buzz</span>, ";
        }
        else if(loop % fizzNum == 0 && loop % buzzNum == 0){
            output += "Fizz-Buzz, ";
        }
        else{
            output += `${loop}, `;
        }
    }

    //Step 6: Print the output to the screen
    document.getElementById("fizzbuzzOutput").innerHTML = output;
});

document.getElementById("btnClear").addEventListener("click", function(){
    document.getElementById("fizzInput").value = "";
    document.getElementById("buzzInput").value = "";
    document.getElementById("fizzbuzzOutput").innerText = "";
})

