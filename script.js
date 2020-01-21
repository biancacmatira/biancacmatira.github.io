/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "-65px";
    } else {
        document.getElementById("navbar").style.top = "0";
    }
    prevScrollpos = currentScrollPos;
}

// window.onscroll = function () {
//     if (pageOffset >= 1000) {
//         document.getElementById('back2top').style.visibility = "visible"
//     } else {
//         document.getElementById('back2top').style.visibility = "hidden";
//     }
// };
