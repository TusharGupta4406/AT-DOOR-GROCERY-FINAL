// Countdown Timer
let countdown = 30;
const countdownElement = document.getElementById("waiting-button");

function updateCountdown() {
    if (countdown > 0) {
        countdown--;
        countdownElement.innerText = `Waiting... (${countdown})`;
        setTimeout(updateCountdown, 1000);
    } else {
        location.reload(); // Refresh page after 30 seconds
    }
}

// Start the countdown when the page loads
window.onload = updateCountdown;

// Close modal function (optional)
function closeModal() {
    document.querySelector(".payment-modal").style.display = "none";
}
function paymentDone() {
    alert("Thank you! Your payment has been recorded.");
    location.reload(); // Refresh the page after clicking
}
