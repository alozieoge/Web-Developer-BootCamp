const day = 7;

// 1 -> Monday
// 2 -> Tuesday
// 3 -> Wednesday
// 4 -> Thursday
// 5 -> Friday

// if (day === 1) {
//     console.log("MONDAY");
// }
// else if (day === 2) {
//     console.log("TUESDAY");
// }
// else if (day === 3) {
//     console.log("WEDNESDAY");
// }
// else if (day === 4) {
//     console.log("THURSDAY");
// }
// else if (day === 5) {
//     console.log("FRIDAY");
// }
// else {
//     console.log("I DON'T KNOW THAT!")
// }

switch (day) {
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    case 6:
    case 7:
        console.log("WEEKEND");
        break;
    default:
        console.log("I DON'T KNOW THAT!")
}