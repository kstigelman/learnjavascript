var favorite = (Math.random() * 10) + 1;

prompt("Number guessing game: Guess a number between 1 and 10 to see if your number matches!");

var guess = prompt("Enter a number:");

if (favorite == number)
{
	prompt("I chose the same guess!");
}
else
{
	prompt("Whoops, I chose " + favorite);
}
