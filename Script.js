let intervalId;
const colors = ["#ff5733", "#33ff57", "#3357ff", "#f033ff", "#ff8c33", "#33fff5"];

function changeBackground() {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;

    // Display the color code
    document.getElementById("colorCode").textContent = `Color: ${randomColor}`;
}

document.getElementById("start").addEventListener("click", function () {
    if (!intervalId) { 
        changeBackground(); // Change immediately
        intervalId = setInterval(changeBackground, 1000);
    }
});

document.getElementById("stop").addEventListener("click", function () {
    clearInterval(intervalId);
    intervalId = null;
});
