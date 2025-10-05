// COUNTDOWN TIMER LOGIC
// Set the date we're counting down to (Format: Year, Month (0-11), Day, Hour, Minute, Second)
const countDownDate = new Date("Dec 25, 2024 00:00:00").getTime();

// Update the countdown every 1 second
const countdownFunction = setInterval(function() {
    // Get today's date and time
    const now = new Date().getTime();
    
    // Find the distance between now and the countdown date
    const distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in the elements with their respective IDs
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    
    // If the countdown is over, write some text
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("timer").innerHTML = "WE'RE TOGETHER! 🎉";
    }
}, 1000);

// LOVE NOTE LOGIC
function saveNote() {
    // Get the text from the textarea
    const noteText = document.getElementById('noteInput').value;
    
    // Save it to the browser's local storage
    localStorage.setItem('savedLoveNote', noteText);
    
    // Display it on the page
    displayNote();
}

function displayNote() {
    // Get the note from local storage
    const savedNote = localStorage.getItem('savedLoveNote');
    
    // If a note exists, display it
    if (savedNote) {
        document.getElementById('savedNote').textContent = savedNote;
    }
}

// Display any saved note when the page loads
displayNote();