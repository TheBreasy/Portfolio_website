$("#email").on("keyup", function(e) {
    if ($(this).val().includes(".be", "@") || $(this).val().includes(".com", "@")) {
        $(this).css("borderBottom", "2px solid #d3d3d3");
    } else if ($(this).val().includes("@")) {
        $(this).css("borderBottom", "2px solid orange");
    } else {
        $(this).css("borderBottom", "2px solid red");
    }
});

$("#firstname").on("keyup", function(e) {
    if ($(this).val() !== "") {
        $(this).css("borderBottom", "2px solid #d3d3d3");
    } else {
        $(this).css("borderBottom", "2px solid red");
    }
});

$("#lastname").on("keyup", function(e) {
    if ($(this).val() !== "") {
        $(this).css("borderBottom", "2px solid #d3d3d3");
    } else {
        $(this).css("borderBottom", "2px solid red");
    }
});

$("#telephone").on("keyup", function(e) {
    if ($(this).val() !== "" && $(this).val().match(/^[0-9]+$/) && $(this).val().length == 10) {
        $(this).css("borderBottom", "2px solid #d3d3d3");
    } else {
        $(this).css("borderBottom", "2px solid red");
    }
});

var firstname = $("#firstname");
var lastname = $("#lastname");
var email = $("#email");
var phone = $("#telephone");

$("#submit").on("click", function(e) {
    if (firstname.val() == "" || lastname.val() == "" || email.val() == "" || phone.val() == "") {
        firstname.css("borderBottom", "2px solid red");
        lastname.css("borderBottom", "2px solid red");
        email.css("borderBottom", "2px solid red");
        phone.css("borderBottom", "2px solid red");
        e.preventDefault();
    }
});