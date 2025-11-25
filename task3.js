// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(num)
{
  let sum = 0;
  let numSize;

  for(let i = 0; i < num.length; i++)
  {
    sum = sum + num[i];
  }

  numSize = num.length;

let average = sum / numSize;

return average;
}

let show = make_avg([2,2,2,2]);
console.log(show);