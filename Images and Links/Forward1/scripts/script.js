/*
    Student Name: Damjan.Dogov
    File Name: script.js
    Data: 14.04.22
*/

// Global variables
var videoSource = document.getElementById("vid-src");
var video = document.getElementById("example");
var descriptionSource = document.getElementById("despsrc");
video.style.width = "500px";
video.style.height = "300px";

// Function to display burpees video
function burpees() {
   videoSource.src = "./media/burpees.mp4";
   video.style.display = "block";
   video.load();
}

// Function to display plank video
function plank() {
    videoSource.src = "./media/burpees.mp4";
    video.style.display = "block";
    video.load();
 }

 // Function to display climbers video
function climbers() {
    videoSource.src = "./media/climbers.mp4";
    video.style.display = "block";
    video.load();
 }
















































