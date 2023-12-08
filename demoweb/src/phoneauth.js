import { RecaptchaVerifier, sendEmailVerification } from "firebase/auth";

const getcode = document.getElementById('signup');


const auth = firebase.auth()



window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

recaptchaVerifier.render().then(widgetId =>{
    window.recaptchawidgetId
})






getcodeButton.addEventListener('click',sendEmailVerification)