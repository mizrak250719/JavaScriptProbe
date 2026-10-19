export function addPixels(a,b)
{
    if(typeof a !=="string" || typeof b !== "string")
    {
        return null;
    }

    if(!a.endsWith("px") || !b.endsWith("px"))
    {
        return null;
    }

    const numberA = parseInt(a);
    const numberB = parseInt(b);

    if(Number.isNaN(numberA) || Number.isNaN(numberB))
    {
        return null;
    }

 return `${numberA + numberB}px`;

}


console.log(addPixels("10px", "20px"));   // "30px"
console.log(addPixels("15px", "25px"));   // "40px"
console.log(addPixels(10, "20px"));       // null
console.log(addPixels("10px", 20));       // null
console.log(addPixels("10em", "20px"));   // null
console.log(addPixels("abcpx", "20px"));  // null
console.log(addPixels("0px", "5px"));     // "5px"
console.log(addPixels("10px", "0px"));    // "10px"