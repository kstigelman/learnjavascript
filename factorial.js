function factorial(number)
{
	if(number == 0)
	{
		return 1;
	}
	else
	{
		return number * factorial(number - 1);
	}
	
	
	
}

for(var i = 1; i < 11; i++)
{
	console.log('Factorial of ' + i + '\n' + factorial(i));
	
}
