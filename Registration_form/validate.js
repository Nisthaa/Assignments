function validateForm() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phn = document.getElementById("phn").value;
    var dob = document.getElementById("dob").value;

    var msex = document.getElementById("msex");
    var fsex = document.getElementById("fsex");
    var osex = document.getElementById("osex");
    var pwd = document.getElementById("pwd").value;
    var pwd2 = document.getElementById("pwd2").value;
    var addr = document.getElementById("addr").value;
    var resume = document.getElementById("file").value;
    var pc = document.getElementById("pc");
    var em = document.getElementById("em");
    var mes = document.getElementById("mes");
    var all = document.getElementById("all");
    var site = document.getElementById("site");
    var optionSelIndex = site.options[site.selectedIndex].value;
    var refer = document.getElementById("refer").value;
    var tnc = document.getElementById("tnc");


    var letters = /^[a-zA-Z]+$/;
    var mail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!$%#@^&*]).{4,}$/;
    var digits = /^\d{10}$/;
    var ad = /^[0-9a-zA-Z,. _]{8,}$/;

    if (fname == "" || lname == "") {
        alert("Please enter your name!");
        return false;
    }
    else if (!letters.test(fname) || !letters.test(lname)) {
        alert("Please enter alphabets only in name field!");
        return false;
    }
    if (email == "") {
        alert("Please enter your email id!");
        return false;
    }
    else if (!mail.test(email)) {
        alert("Invalid email id! Format: example@gmail.com");
        return false;
    }
    if (phn == '') {
        alert('Please enter your phone number!');
        return false;
    }
    else if (!digits.test(phn)) {
        alert('Invalid Phone no! Enter 10 digits.');
        return false;
    }
    if (dob == "") {
        alert("Please select your Birth date!");
        return false;
    }
    if (msex.checked == false && fsex.checked == false && osex.checked == false) {
        alert("You must select gender male or female or other!");
        return false;
    }
    if (pwd == "") {
        alert('Please enter password!');
        return false;
    }
    else if (!pass.test(pwd)) {
        alert('Invalid password type! Password should contain at least 1 lowwercase,1 uppercase,1 digit,1 special character.');
        return false;
    }
    if (pwd2 == "") {
        alert("Please enter confirm password!");
        return false;
    }
    else if (pwd != pwd2) {
        alert('Please enter the same password to confirm!');
        return false;
    }
    if (addr == "") {
        alert("Please enter your address!");
        return false;
    }
    else if (!ad.test(addr)) {
        alert("Address must be alphanumeric characters with comma or dot only! And minimim length is 8.");
        return false;
    }
    if (resume == "") {
        alert("Please upload your resume!");
        return false;
    }
    if (pc.checked == false && em.checked == false && mes.checked == false && all.checked == false) {
        alert("Please select at least one of the best ways to contact you!");
        return false;
    }
    if (optionSelIndex == 0) {
        alert("Please select one of the ways you heard about us!");
        return false;
    }
    if (refer == 0) {
        alert("Please slide the range bar to help us know how likely you would recommend us!");
        return false;
    }
    if (tnc.checked == false) {
        alert("Please accept our terms and conditions!");
        return false;
    }
    else {
        alert('Form Succesfully Submitted');
        window.location.reload();
        return true;
    }

}