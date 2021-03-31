var input = prompt("Enter some text:");

var output = "";
for(i = input.length - 1; i > -1; i--)
{
	
	output += input[i];
	
}
alert(output);
