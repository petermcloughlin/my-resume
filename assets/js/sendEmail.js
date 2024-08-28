let timeout;
function sendMail(){
    let params = {
        from_name: document.getElementById("fullname").value,
        reply_to: document.getElementById("emailaddress").value,
        message: document.getElementById("projectsummary").value
    }
    emailjs.send("service_c3zaijp", "Peter", params).then(confirmSent());    
    clearForm();
    removeMessage();
}
function clearForm(){
    document.getElementById("fullname").value = "";
    document.getElementById("emailaddress").value = "";
    document.getElementById("projectsummary").value = "";    
}
function confirmSent(){    
    confirm = document.getElementById('confirmation');
    confirm.innerHTML += `<p><b>Thank you for your message. I will be in touch shortly.</b></p>`;    
}
function removeMessage(){
    timeout = setTimeout(removeConfirmation, 7000);
}
function removeConfirmation(){
    confirm = document.getElementById('confirmation');
    confirm.innerHTML = `<p><b></b></p>`; 
}
