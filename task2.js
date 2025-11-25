// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function checkEvenOdd(num)
{
    let result;
    
    if(num % 2 === 1)
    {
        result = num * 2;
    }

    else
        {
            result = num / 2;
        }

     return result;
}

let show = checkEvenOdd(7);
console.log(show);