    //Problem 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // => Tesla
console.log(otherRandomCar) // => Mercedes 


    //Problem 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name); // console log will not show due to not being called
console.log(otherName); // => Elon


    //Problem 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); // => 12345
console.log(hashedPassword); // undefined - objected was not defined on line 23


    //Problem 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second); // => False (2==5)
console.log(first == third); // => True (2==2)
    
    
   //Problem 5 
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); // => value
console.log(secondKey); // => [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // => 1
console.log(willThisWork); // => 5 -- yes it will work because it doesn't matter what you declare the variable





