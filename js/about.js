window.addEventListener("DOMContentLoaded", function () {
    const profilePic = document.querySelector(".profile-pic");
    const workingOutLink = document.getElementById("working-out-link");

    workingOutLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the link from following its href attribute
        profilePic.src = "./image/workingout.jpg"; // Replace with the path to your new image
    });

    const profilePic2 = document.querySelector(".profile-pic");
    const workingOutLink2 = document.getElementById("working-out-link-2");
    workingOutLink2.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the link from following its href attribute
        profilePic2.src = "./image/drinking.jpeg"; // Replace with the path to your new image
    });

    const profilePic3 = document.querySelector(".profile-pic");
    const workingOutLink3 = document.getElementById("working-out-link-3");
    workingOutLink3.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the link from following its href attribute
        profilePic3.src = "./image/coding.jpg"; // Replace with the path to your new image
    });
});


document.querySelectorAll(".list-items-mobile ul li a").forEach(function (element) {
    element.style.color = "#000";
});
document.body.style.backgroundColor = "#e0e0e0";
document.querySelector(".title").style.color = "#000";
document.querySelector(".certification .title").style.color = "#000";
document.querySelector(".tech-stack .title").style.color = "#000";
const switchElement = document.querySelector(".switch");
const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");
const bodyElement = document.body;
let isWhiteBg = true;
let birdsEffect = null; // Variable to store the VANTA.BIRDS effect instance

// Function to initialize the VANTA.BIRDS effect
function initializeBirdsEffect() {
    if (birdsEffect) {
        birdsEffect.destroy(); // Destroy the existing effect instance
    }

    birdsEffect = VANTA.BIRDS({
        el: ".birds",
        quantity: 3,
        color1: 0xd50000,
        backgroundColor: isWhiteBg ? "#ffffff" : "#0D0D0D",
        color2: 0xd50000,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
    });
}

// Add a click event listener to the switch
switchElement.addEventListener("click", function () {
    // Toggle the display of the icons
    moonIcon.style.display = moonIcon.style.display === "none" ? "inline-block" : "none";
    sunIcon.style.display = sunIcon.style.display === "none" ? "inline-block" : "none";

    // Toggle the background color class
    if (isWhiteBg) {
        bodyElement.classList.remove("white");
        bodyElement.classList.add("dark");
        sunIcon.style.color = "#fff";
        isWhiteBg = false;
        document.querySelectorAll(".list-items ul li a").forEach(function (element) {
            element.style.color = "#f5f5f5";
        });

        document.querySelectorAll(".list-items-mobile ul li a").forEach(function (element) {
            element.style.color = "#f5f5f5";
        });
        document.querySelector(".sm-icon a").style.color = "#f5f5f5";
        document.querySelector(".tech-stack .title").style.color = "#f5f5f5";
        document.querySelector(".portfolio").style.color = "#f5f5f5";
        document.querySelector(".title").style.color = "#f5f5f5";
        document.querySelector(".footer div h6").style.color = "#f5f5f5";
        document.querySelector(".certification .title").style.color = "#f5f5f5";
        document.querySelector(".footer .copy-right").style.color = "#f5f5f5";
        const iconElements = document.querySelectorAll("div .sm-icon a");
        iconElements.forEach(function (element) {
            element.style.color = "#f5f5f5";
            element.style.border = "1px solid #f5f5f5";
        });
        const iconElementsabout = document.querySelectorAll(".sm-icon-about a");
        iconElementsabout.forEach(function (element) {
            element.style.color = "#000";
            element.style.border = "1px solid #000";
        });
    } else {
        bodyElement.classList.remove("dark");
        bodyElement.classList.add("white");
        sunIcon.style.color = "#212121";
        isWhiteBg = true;
        document.querySelector(".footer div h6").style.color = "#000";
        document.querySelector(".footer .copy-right").style.color = "#000";
        document.querySelector(".title").style.color = "#000";
        document.querySelector(".tech-stack .title").style.color = "#000";
        document.querySelector(".certification .title").style.color = "#000";
        document.querySelector(".sm-icon a").style.color = "#000";
        document.querySelector(".portfolio").style.color = "#000";
        document.querySelector(".sm-icon a").style.border = "1px solid #000";
        const iconElements = document.querySelectorAll(".sm-icon a");
        iconElements.forEach(function (element) {
            element.style.color = "#000";
            element.style.border = "1px solid #000";
        });
        document.querySelectorAll(".list-items ul li a").forEach(function (element) {
            element.style.color = "#000";
        });

        document.querySelectorAll(".list-items-mobile ul li a").forEach(function (element) {
            element.style.color = "#000";
        });
    }

    initializeBirdsEffect(); // Initialize the VANTA.BIRDS effect
});

initializeBirdsEffect(); // Initialize the VANTA.BIRDS effect initially
