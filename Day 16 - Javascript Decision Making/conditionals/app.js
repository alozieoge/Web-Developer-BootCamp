// console.log("ITS WORKING!!!");

// console.log("BEFORE CONDITIONAL!");
// if (1 + 1 === 2) {
//     console.log("MATH STILL WORKS!")
// }
// console.log("AFTER CONDITIONAL!");

// let random = Math.random();
// if (random < 0.5) {
//     console.log("YOUR NUMBER IS LESS THAN 0.5!")
//     console.log(random);
// }

// if (random >= 0.5) {
//     console.log("YOUR NUMBER IS GREATER THAN 0.5!")
//     console.log(random);
// }

// const dayOfWeek = prompt("ENTER A DAY: ").toLowerCase();

// if (dayOfWeek == "monday") {
//     console.log("UGGHH I HATE MONDAYS!");
// } else if (dayOfWeek === "saturday") {
//     console.log("YAY I LOVE SATURDAYS!")
// } else if (dayOfWeek === "friday") {
//     console.log("TGIF!")
// } else {
//     console.log("MEH!")
// }


// 0 - 5 - INFANT - FREE
// 5 - 10 - CHILD - £10
// 10 - 18 - TEEN - £15
// 19 - 65 - ADULT - £20
// 65+ - SENIOR - £10

// const age = 70;

// if (age < 5) {
//     console.log("You are a baby. You get in for free!")
// } else if (age < 10) {
//     console.log("You are a child. You pay £10!")
// } else if (age < 18) {
//     console.log("You are a teen. You pay £15!")
// } else if (age < 65) {
//     console.log("You are an adult. You pay £20!")
// } else {
//     console.log("You are a senior. You pay £10!")
// }


// let random = Math.random();
// if (random < 0.5) {
//     console.log("YOUR NUMBER IS LESS THAN 0.5!")
// } else {
//     console.log("YOUR NUMBER IS GREATER THAN OR EQUAL TO 0.5!")
// }
// console.log(random);


const password = prompt("Please enter a new password: ");

// Password must be 6+ characters
// Password cannot include space

if (password.length >= 6) {
    if (password.indexOf(" ") === -1) {
        console.log("Your password is valid!");
    } else {
        console.log("Password cannot contain spaces!");
    }
} else {
    console.log("Password is too short! It must be 6+ characters long.")
} 
