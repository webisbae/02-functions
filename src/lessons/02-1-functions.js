/**
 * Converts a number of seconds into a formatted time string in minutes and seconds.
 * @param {number} seconds - The number of seconds to format.
 * @returns {string} A string representing the time in the format "MM:SS".
 *
 * Example:
 *  - If the input is 125 seconds, the function returns "02:05".
 *  - If the input is 60 seconds, the function returns "01:00".
 *
 * Instructions:
 * 1. Calculate the number of minutes by dividing the seconds by 60 and rounding down.
 * 2. Calculate the remaining seconds after extracting the minutes.
 * 3. Convert both minutes and seconds to strings, padding them with a leading zero if they are less than 10.
 * 4. Concatenate minutes and seconds with a colon (:) to form the time string.
 */
let formatTime = (seconds) => {};

/**
 * Creates a timer that counts up to a specified number of seconds, logging the elapsed time each second.
 * @param {number} seconds - The number of seconds to count up to.
 *
 * Instructions:
 * 1. Initialize a variable to track the elapsed time.
 * 2. Capture the current time (in milliseconds) at the start of the timer.
 * 3. Use setInterval to create a timer that runs every 1000 milliseconds (1 second).
 * 4. In each interval, calculate the elapsed time and check if it has reached the specified duration.
 * 5. If the elapsed time is less than the specified duration, log the formatted time.
 * 6. Once the specified duration is reached, log the formatted time, print "Time's up!", and clear the interval.
 *
 * Notes:
 * - The elapsed time is calculated by subtracting the start time from the current time.
 * - Use the formatTime function to format the elapsed time before logging.
 */
function countUpTo(seconds) {}
