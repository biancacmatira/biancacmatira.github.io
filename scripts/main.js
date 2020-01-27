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

window.addEventListener("DOMContentLoaded", function () {

    // get the form elements defined in your form HTML above

    var form = document.getElementById("contactform");
    var button = document.getElementById("submit");
    var status = document.getElementById("status2");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        button.style = "display: none ";
        status.innerHTML = "Thanks!";
    }

    function error() {
        status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}

// $(document).ready(function () {
//     $('#submit').click(function (event) {
//         console.log('Clicked');

//         var name = $('#name').val();
//         var email = $('#email').val();
//         var message = $('#message').val();
//         var statusMsg = $('#status1');
//         statusMsg.empty();

//         if (!(email.length > 5) && !(email.includes('@')) && !(email.includes('.'))) {
//             statusMsg.append('<p>Email is invalid.</p>');
//             event.preventDefault();
//         }
//     })
// })


// window.onscroll = function () {
//     if (pageOffset >= 300) {
//         document.getElementById('back2top').style.visibility = "visible";
//     } else {
//         document.getElementById('back2top').style.visibility = "hidden";
//     }
// };