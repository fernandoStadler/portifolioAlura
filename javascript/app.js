let btnSend = document.getElementById("submit");      
let inputName = document.getElementById("name");    
let subject = document.getElementById("subject");    
let mail = document.getElementById("mail");
let message = document.getElementById("message");
let responseMail = document.getElementById("response-mail");
let textMsg = document.getElementById("text-msg");
let form = document.getElementById("form-contact");

let templateParams = {
    subject: subject.value,
    name: inputName.value,
    mail: mail.value,
    message: message.value,
};
function validadeField() {
    if (inputName.value == "" || subject.value == "" || mail.value == "" || message.value == "") {  
        btnSend.disabled = true;  
        } else {
            btnSend.disabled = false;
        }
} validadeField();

    inputName.onkeydown = validadeField;
    subject.onkeydown = validadeField;
    mail.onkeydown = validadeField;
    message.onkeydown = validadeField;

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
