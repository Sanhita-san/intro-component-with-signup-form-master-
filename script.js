const form = $("#form");
const fname = $("#fname");
const lname = $("#lname");
const email = $("#email");
const password = $("#password");

form.submit(function (e) {
  // Regular Expression for validating email
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const valid = regex.test($("#email").val());

  //   Removing error class from all input before validating
  $("input").removeClass("error");

  //   Checking and updating if First Name field is empty
  if (fname.val() === "") {
    fname.addClass("error");
    fname.siblings(".err-msg").text("First Name cannot be empty");
    console.log("First Name");
  }

  //   Checking and updating if Lasst Name field is empty
  if (lname.val() === "") {
    lname.addClass("error");
    lname.siblings(".err-msg").text("Last Name cannot be empty");
    console.log("last name");
  }

  //   Checking and updating if Email field is empty or not valid
  if (email.val() === "") {
    email.addClass("error");
    email.siblings(".err-msg").text("Email cannot be empty");
    console.log("email");
  } else if (!valid) {
    email.addClass("error");
    email.siblings(".err-msg").text("Looks like this is not an email");
    console.log("email");
  }

  //   Checking and updating if Password field is empty
  if (password.val() === "") {
    password.addClass("error");
    password.siblings(".err-msg").text("Password cannot be empty");
    console.log("password");
  }

  e.preventDefault();
});
