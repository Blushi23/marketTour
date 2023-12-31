function validate() {
    let name = document.getElementById("name").value,
        phone = document.getElementById("phone").value,
        email = document.getElementById("email").value,
        subject = document.getElementById("subject").value,
        message = document.getElementById("message").value,
        error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    let text;
    if (name.length < 3) {
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
    }
    if (isNaN(phone) || phone.length != 10) {
        text = "Please Enter valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
    }
    if (subject.length < 5) {
        text = "Please Enter Correct Subject";
        error_message.innerHTML = text;
        return false;
    }
    if (message.length <= 10) {
        text = "Please Enter More Than 10 Characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully!");
    return true;
}