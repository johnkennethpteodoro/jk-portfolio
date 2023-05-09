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
