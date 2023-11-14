import { formatTime } from "http://127.0.0.1:5500/src/lessons/02-1-functions.js";

// global variables
let timerId = 0; // tracks the interval timer
let startTime = 0; // tracks the start time of the timer
let elapsed = 0; // tracks the elapsed time

/**
 * Updates the text content of the stopwatch display on the webpage.
 * @param {string} time - The time string to display on the stopwatch.
 *
 * Instructions:
 * 1. Use `document.querySelector` to select the HTML element with the id 'stopwatch-display'.
 * 2. Set the `textContent` property of the selected element to the provided `time` string.
 *
 * Example Usage:
 * - If the input is "02:30", the stopwatch display on the webpage will be updated to show "02:30".
 * - This function is typically called with a formatted time string, like those returned by the `formatTime` function.
 *
 * Notes:
 * - Ensure there's an element with the id 'stopwatch-display' in your HTML.
 * - This function is designed to interact with the DOM and will update the content of a specific element on the webpage.
 * - The `time` parameter should be a string that represents the time in a format suitable for display.
 */
let updateTime = function (time) {};

/**
 * Starts the stopwatch timer.
 *
 * Instructions:
 * 1. If the timer is not already running, store the current time as the start time.
 * 2. Use `setInterval` to update the elapsed time every second.
 * 3. On each interval, calculate the new elapsed time and update the display using `updateTime`.
 *
 * Example Usage:
 * - Calling `startTimer()` will begin updating the stopwatch display every second.
 *
 * Notes:
 * - This function uses the `timerId` to track the interval and prevent multiple intervals from being set.
 * - The `startTime` and `elapsed` variables are used to calculate the current time elapsed since the timer started.
 */
function startTimer() {}

/**
 * Stops the stopwatch timer.
 *
 * Instructions:
 * 1. If the timer is currently running, clear the interval using `clearInterval`.
 * 2. Set `timerId` to null to indicate that the timer is stopped.
 *
 * Example Usage:
 * - Calling `stopTimer()` will stop the timer and cease updating the stopwatch display.
 *
 * Notes:
 * - This function checks if `timerId` is set before trying to stop the timer to prevent errors.
 */
function stopTimer() {}

/**
 * Resets the stopwatch timer to zero.
 *
 * Instructions:
 * 1. Stop the timer using `clearInterval` and set `timerId` to null.
 * 2. Reset the `elapsed` time to 0.
 * 3. Update the display to show 00:00 using `updateTime`.
 *
 * Example Usage:
 * - Calling `resetTimer()` will stop the timer if it's running, reset the time, and update the display to 00:00.
 *
 * Notes:
 * - This function will reset the timer regardless of whether it is currently running or stopped.
 */
function resetTimer() {}

// Selectors
// listen for clicks on the start, stop, and reset buttons
// call the appropriate function for each button
