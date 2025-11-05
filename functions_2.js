// TODO: Create a function called ‘multiply’ that will take in 3 parameter and multiply all 3 numbers together. Note: The argument passed must NOT be the same number. 
function multiply(num1, num2, num3){
    const result = num1 * num2 * num3
    return result
}
let answer = multiply(3, 5, 8)
console.log(`The final result is: ${answer}`)
console.log("-".repeat(60))
// TODO: Create a function expression called ‘convertToSeconds’ that takes in a number of minutes as an argument and returns the amount in seconds. ***Do not use a console.log() inside of the function***
function convertToSeconds(minutes){
    const seconds = minutes * 60
    return seconds
}
let converted = convertToSeconds(5)
console.log(`The amount of seconds are: ${converted }`)
console.log("-".repeat(60))
// TODO: Create a function called fahrenheitToCelsius that takes the temperature as an parameter and returns the equivalent temperature in Celsius. ***Do not use a console.log() inside of the function***
function fahrenheitToCelsius(temperature){
    celsius = Math.round((temperature - 32) * 5/9)
    return celsius
}

let temp = fahrenheitToCelsius(79)
console.log(`The temperature in Celsuis is: ${temp}`)
console.log("-".repeat(60))
// TODO: Create a function that takes a string as a parameter and returns the reverse of the string. ***Do not use a console.log() inside of the function ***
function reverse(word){
    const backwards = word.split("").reverse().join("")
    return backwards
}

let rev = reverse("Welcome")
console.log(rev)
console.log("-".repeat(60))
// TODO: Create a function that takes in a string and returns the number of Vowels in the sentence. E.g. countVowels(‘Javascript’) //output =3 ***Do not use a console.log() inside of the function***
function countVowels(word)
{
    const vowels = "aeiouAEIOU";
    let amount = 0;
     for (let letter = 0; letter < word.length; letter++)
        {
        if (vowels.includes(word[letter])){amount++;}
        }
     return amount;
}

let amount_of_vowels = countVowels("MeAndYou")
console.log(`The amount of vowels are: ${amount_of_vowels}`)
console.log("-".repeat(60))
// TODO: Create a “isPrime” function that takes a number as a parameter and returns true if the number is prime, and false otherwise. Make sure to test your code with 4 numbers
function isPrime(number){
    if (number <= 1) return "I'snt a prime number";
    for (let num = 2; num <= Math.sqrt(number); num++) 
        {
        if (number % num === 0){return "I'snt a prime number";}
        }
    return "Is a prime number";
}


console.log(`${isPrime(5)}, ${isPrime(4)}, ${isPrime(9)}, ${isPrime(23)}`)
