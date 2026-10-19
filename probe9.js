
//Deklarative
//export function isString(value)
//{
//    return typeof value === "string";
//}



//Imperative
export function isString(value)
{
    if(typeof value !== "string")
    {
        return false;
    }

    return true;
}




console.log(isString("Aziz"));
console.log(isString(9));