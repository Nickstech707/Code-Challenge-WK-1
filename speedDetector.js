// Import the prompt-sync library
const prompt = require("prompt-sync")({ sigint: true });

// Takes the car's speed as an input 
const speed = parseFloat(prompt("Speed of the car (in km/h): "));

// Checks if the speed is exceeded and calculate demerit points
function speedDetector(speed) {
    const speedLimit = 70; // Declares a constant
    const pointsLimitForSuspension = 12;

    // Checks if the car is within the speed limit
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        // Calculates demerit points based on how much the speed exceeds the limit
        const demeritPoints = Math.floor((speed - speedLimit) / 5);

       // Displays demerit points or license suspension due to exceeding demerit points
        if (demeritPoints > pointsLimitForSuspension) {
            console.log("License suspended"); 
        } else {
            console.log("Points: " + demeritPoints);
        }
    }
}

// Calls the function
speedDetector(speed); 

