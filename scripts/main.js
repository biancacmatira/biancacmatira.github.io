/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "-65px";
    } else {
        document.getElementById("navbar").style.top = "0px";
    }
    prevScrollpos = currentScrollPos;
};

var img = document.getElementsByClassName('item');
img.onload = function () {
    if (img.height > img.width) {
        img.height = '100%';
        img.width = 'auto';
    }
};

$(document).ready(function () {
    $('#submit').click(function (event) {
        console.log('Clicked');

        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        var statusMsg = $('#status');
        statusMsg.empty();

        if (!(email.length > 5) && !(email.includes('@')) && !(email.includes('.'))) {
            statusMsg.append('<p>Email is invalid.</p>');
            event.preventDefault();
        }
    })
})

// window.onscroll = function () {
//     if (pageOffset >= 300) {
//         document.getElementById('back2top').style.visibility = "visible";
//     } else {
//         document.getElementById('back2top').style.visibility = "hidden";
//     }
// };