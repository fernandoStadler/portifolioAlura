let btnSend = document.getElementById("submit")
let subject = document.getElementById("subject");
let inputName = document.getElementById("name");
let mail = document.getElementById("mail");
let message = document.getElementById("message");
let responseMail = document.getElementById("response-mail");
let textMsg = document.getElementById("text-msg");


let templateParams = {
    subject: subject.value,
    name: inputName.value,
    mail: mail.value,
    message: message.value,
};

function cleanResponse(){
    responseMail.className = "d-block"
    textMsg.innerText = "";

}
function sendResponse(CssClassName, message) {
    responseMail.className = CssClassName;
    textMsg.innerText = message;
    setInterval(cleanResponse, 10000);
}

function sendEmail() {
    emailjs.send("site.FernandoStadler", "template_lzaqcbs", templateParams).then(function () {
        sendResponse("send-sucess","O seu email foi enviado com sucesso!")
    }, function () {
        sendResponse("send-error","Email não enviado")
    });
}

btnSend.onclick = sendEmail;
