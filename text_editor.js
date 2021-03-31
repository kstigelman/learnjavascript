//Must run with node.js

var input = [];
var i = 0;

const fs = require("fs");

fs.open('user_input.txt', 'w', function (err, file) {
  if (err) throw err;
});

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

function getLine(iterator)
{
	
	readline.question("", text => {
		input[iterator] = text;
		fs.appendFile('user_input.txt', text + '\n', (err) =>
		{
			if (err) throw err;
		});
		
		if(text == 'exit')
		{
			readline.close();
			return true;
		}
		else
		{
			getLine(iterator+1);
		}
		
	});
	
}


console.log("Enter some text and separate lines by pressing ENTER");
getLine(i);


 

