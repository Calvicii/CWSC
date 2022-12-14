let video = document.querySelector('#video');

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
        video.srcObject = stream;
    })
    .catch (function (error) {
        console.log("Error.");
    })
} else {
    console.log("getUserMedia not supported.");
}