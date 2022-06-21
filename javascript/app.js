let btnSend  = document.getElementById("submit")
let subject = document.getElementById("subject");
let inputName = document.getElementById("name");
let mail = document.getElementById("mail");
let message = document.getElementById("message");

function sendEmail(){
    emailjs.send("site.FernandoStadler","template_lzaqcbs",{
        subject: subject.value,
        name: inputName.value,
        mail: mail.value,
        message: message.value,
        });

    console.log(result)
}

btnSend.onclick = sendEmail;
