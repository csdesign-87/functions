function firstLetterName(name) {
	alert("The name " + name + " starts with the letter " + name[0]);
}

firstLetterName("Caleb")

function divisibleByTwo(number)
{
    return (number % 2 === 0);
}

const x = parseInt(prompt("Enter your number"));
alert(divisibleByTwo(x));


function largestNum(arr)
{
   let largest = 0;

   for(let i=0; i<arr.length; i++)
   {
       if (largest < arr[i])
       {
           largest = arr[i];
       }
   }

   return largest;
}

let arr = [1, 7, 2, 5, 4, 3, 37, 9, 7, 4, 1, 8, 14];
const y = largestNum(arr);
alert(y);