///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

//created a total acres variable so i could store each areas total acres as their respective loops finished
let totalAcres = 0

//For loops to go through each different orchard sections and calculate there total acres. Each iteration of the loop should add the current arrays number to the total acres variable
//Total acres variable is adding its current value + the current array value were looking at so it doesnt only reset itself to the current array value
for (let i = 0; i < fujiAcres.length; i++){
    totalAcres += fujiAcres[i]
}
for (let i = 0; i < galaAcres.length; i++){
    totalAcres += galaAcres[i]
}
for (let i = 0; i < pinkAcres.length; i++){
    totalAcres += pinkAcres[i]
}

console.log(totalAcres)


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

//Using our totalAcres variable from the problem above we just need to divide it by 7 since there is 7 days in a week to find the average daily acres picked
let averageDailyAcres = (totalAcres / 7)
console.log(averageDailyAcres)

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

//While loop should run until the acresleft value reaches 0. Each time it runs we add 1 to our days variable.
// The value of acresLeft is set to itself minus our averageDailyAcres value so that it continually updates instead of resetting to 174 each iteration
while (acresLeft > 0){
    days++
    acresLeft -= averageDailyAcres
}
console.log(days)


// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

//Setting these variables as open arrays so that i can push numbers into them to match each day
 let fujiTons = []
 let galaTons = []
 let pinkTons = []

 //setting AppleYield to default at 0 so i can use it in each of the for loops for calculations
let appleYield = 0

//For loops similar to the first problem, they will go through how many acres were picked each day but multiply it by the 6.5 value given in the problem to find how many tons
//Every iteration the loop runs it will push the value for amount of Tons picked into each respective empty array
for (let i = 0; i < fujiAcres.length; i++){
    appleYield= (fujiAcres[i] * 6.5)
    fujiTons.push(appleYield)
}
for (let i = 0; i < galaAcres.length; i++){
    appleYield= (galaAcres[i] * 6.5)
    galaTons.push(appleYield)
}
for (let i = 0; i < pinkAcres.length; i++){
    appleYield= (pinkAcres[i] * 6.5)
    pinkTons.push(appleYield)
}

console.log(fujiTons)
console.log(galaTons)
console.log(pinkTons)



// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

//Variables for each type of apple in pounds
 let fujiPounds = 0
 let galaPounds = 0
 let pinkPounds = 0

 //For loop will iterate between the arrays created in Problem 4 but this time we will multiple each of the values in the array by 2000 to convert tons to pounds
 for(let i=0; i < fujiTons.length; i++){
     fujiPounds = fujiPounds + (fujiTons[i] * 2000)
 }
 for(let i=0; i < galaTons.length; i++){
    galaPounds = galaPounds + (galaTons[i] * 2000)
}
for(let i=0; i < pinkTons.length; i++){
    pinkPounds = pinkPounds + (pinkTons[i] * 2000)
}

console.log(fujiPounds)
console.log(galaPounds)
console.log(pinkPounds)



// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

//Variables created to figure out each apple type profit
//The calculation takes the variables we made in problem 5 and multiplies it by the value given at the beginning of the assignment
let fujiProfit = (fujiPounds * fujiPrice)
let galaProfit = (galaPounds * galaPrice)
let pinkProfit = (pinkPounds * pinkPrice)

console.log(`The total profit of the Fuji Acres is $${fujiProfit}`)
console.log(`The total profit of the Gala Acres is $${galaProfit}`)
console.log(`The total profit of the Pink Acres is $${pinkProfit}`)


// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

//total profit variable uses the 3 variables from Problem 6 added together to find the total profit between all the different types of Apples
let totalProfit = fujiProfit + galaProfit + pinkProfit

console.log(`The total profit is $${totalProfit}`)