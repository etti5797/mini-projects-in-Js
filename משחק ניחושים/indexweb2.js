
let ans = Math.floor(Math.random() * 20 + 1); // 1 - 20
let guesse_counter = 0;

document.getElementById("submitButton").onclick = function()
{
    let user_guess = document.getElementById("guessField").value;
    guesse_counter += 1;
    if(user_guess == ans)
    {
        alert(`${user_guess} is the number. It took you ${guesse_counter} guesses
        you can guess again!`);
        guesse_counter = 0;
        ans = Math.floor(Math.random() * 10 + 1);
    }
    else if(user_guess < ans)
    {
        alert("Too small! guess again");
    }
    else
    {
        alert("Too big! guess again");
    }
}

