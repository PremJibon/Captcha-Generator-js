const captchaTextBox= document.querySelector(".captch_box input"),
captchInputBox = document.querySelector(".captch_input input"),
refreshButton = document.querySelector(".refresh_button"),
message = document.querySelector(".message"),
submitButton = document.querySelector(".button")

let captchaText = null;

const generateCaptcha = ()=>{
    const randomString = Math.random().toString(36).substring(2,7);
    const randomStringArray = randomString.split("")
    const changeString = randomStringArray.map(char => Math.random() > 0.5 ? char.toUpperCase(): char.toLowerCase())
    captchaText = changeString.join("  ")
    captchaTextBox.value = captchaText
}

const refreshBtnClick = ()=>{
    generateCaptcha()
    captchInputBox.value = ""
    captchaKeyUpValidate()
}
function captchaKeyUpValidate(){
    submitButton.classList.toggle("disabled" ,!captchInputBox.value)
}
function submitBtnClick(){
    captchaText = captchaText.split("")
    .filter((char)=> char !== " ")
    .join("")

    if(captchInputBox.value  === captchaText){
        message.innerText = "Entered captcha is correct"
    }
}


refreshButton.addEventListener("click",refreshBtnClick)
captchInputBox.addEventListener("keyup",captchaKeyUpValidate)
submitButton.addEventListener("click",submitBtnClick)


generateCaptcha()


