function sort()
{
	
	first = 0;
	last = 0;

	count = 0;
	
	for(var i = 0; i < data.length; i++)
	{
		if(data[i] == ' ')
		{
			if(data[i + 1] == ' ')
			{
				break;
			} 
			last = i;
			number = '';
		
			for(var j = first; j < last; j++)
			{
				number += data[j];
			}
			list[count] = parseInt(number);
			first = j + 1;
			count++;
		}
		
	}

	for(var i = 0; i < list.length; i++)
	{
		for(var j = 0; j < list.length; j++)
		{
			if(list[j] < list[i])
			{	
				temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
			
			
		}
		
		
	}

	for(var i = 0; i < list.length; i++)
	{
		console.log(list[i], ", ");
	}

}


var list = [];

const fs = require('fs');

var data = fs.readFileSync('list10k.txt', 'utf8');

//console.log('Sorting 10 words:');
//sort();

//data = fs.readFileSync('list10k.txt', 'utf8');

//console.log('Sorting 10,000 words:');
sort();

