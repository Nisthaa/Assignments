function validateForm() {
    var fname = document.getElementById("fname").value;
    var mname = document.getElementById("mname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phn = document.getElementById("phn").value;
    var phn2 = document.getElementById("phn2").value;
    var dob = document.getElementById("dob").value;

    var msex = document.getElementById("msex");
    var fsex = document.getElementById("fsex");
    var osex = document.getElementById("osex");
    var pwd = document.getElementById("pwd").value;
    var pwd2 = document.getElementById("pwd2").value;

    var addr = document.getElementById("addr").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var cou1 = document.getElementById("con");
    var optionCou1 = cou1.options[cou1.selectedIndex].value;
    var zip = document.getElementById("zip").value;

    var addr2 = document.getElementById("addr2").value;
    var city2 = document.getElementById("city2").value;
    var state2 = document.getElementById("state2").value;
    var cou2 = document.getElementById("con2");
    var optionCou2 = cou2.options[cou2.selectedIndex].value;
    var zip2 = document.getElementById("zip2").value;

    var sp = document.getElementById("sp");
    var b = document.getElementById("b");
    var cs = document.getElementById("cs");
    var f = document.getElementById("f");
    var ph = document.getElementById("ph");
    var food = document.getElementById("food");
    var all = document.getElementById("all");
    
    var subscribe = document.getElementById("letter");
    var optionSubs = subscribe.options[subscribe.selectedIndex].value;


    var letters = /^[a-zA-Z]+$/;
    var mail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!$%#@^&*]).{4,}$/;
    var digits = /^\d{10}$/;
    var ad = /^[0-9a-zA-Z,. _]{8,}$/;

    var url = "login.html";

    if (fname == "" ||mname=="" || lname == "") {
        alert("Please enter your name!");
        return false;
    }
    else if (!letters.test(fname) || !letters.test(mname) || !letters.test(lname)) {
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
        alert('Invalid Primary Phone no! Enter 10 digits.');
        return false;
    }
    if (phn2!='' && !digits.test(phn2)) {
        alert('Invalid Alternate Phone no! Enter 10 digits.');
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
    if (dob == "") {
        alert("Please select your Birth date!");
        return false;
    }
    if (msex.checked == false && fsex.checked == false && osex.checked == false) {
        alert("You must select gender male or female or other!");
        return false;
    }
    
    if (addr == "") {
        alert("Please enter your current address!");
        return false;
    }
    else if (!ad.test(addr)) {
        alert("Address must be alphanumeric characters with comma or dot only! And minimim length is 8.");
        return false;
    }
    if (city==""){
        alert("Please enter your city!");
        return false;
    }
    if (state==""){
        alert("Please enter your state.");
        return false;
    }
    if (optionCou1 == 0) {
        alert("Please select country from list!");
        return false;
    }
    if (zip==""){
        alert("Please enter your Zip Code.");
        return false;
    }



    if (addr2 == "") {
        alert("Please enter your current address!");
        return false;
    }
    else if (!ad.test(addr2)) {
        alert("Address must be alphanumeric characters with comma or dot only! And minimim length is 8.");
        return false;
    }
    if (city2==""){
        alert("Please enter your city!");
        return false;
    }
    if (state2==""){
        alert("Please enter your state.");
        return false;
    }
    if (optionCou2 == 0) {
        alert("Please select country from list!");
        return false;
    }
    if (zip2==""){
        alert("Please enter your Zip Code.");
        return false;
    }
    
    if (sp.checked == false && b.checked == false && cs.checked == false && f.checked == false && ph.checked == false && food.checked == false && all.checked == false) {
        alert("Please select at least one of the interests!");
        return false;
    }
    if (optionSubs == 0) {
        alert("Please select YES/NO for subscription!");
        return false;
    }
    else {
        alert('Form Succesfully Submitted');
        return true;
    }

}