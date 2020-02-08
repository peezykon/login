const passwordInput = document.getElementById("password-input");
const confirmPassword = document.getElementById("confirm-password");
const errorMsg = document.getElementById("error-message");
const errorMess = document.getElementById("error-mess");
const submitButton = document.getElementById("submit-button")
const validateEmail = document.getElementById('email')

// validateEmail.addEventListener ('keyup', (e) => {
//     var email = document.getElementById('email').value;
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     var checkEmail = re.test(String(email).toLowerCase());
//     if (!checkEmail) {
//         document.querySelector('#emailError').classList.remove('hide');
//         return true;
//     } else {
//         document.querySelector('#emailError').classList.add('hide');
//         return false;
//     }
// })

confirmPassword.addEventListener('blur', () => {
    if (passwordInput.value === confirmPassword.value) {
        passwordInput.style.border = 'thin solid green';
        confirmPassword.style.border = 'thin solid green';
        errorMsg.style.display = "none";
    } else {
        passwordInput.style.border = 'thin solid red';
        confirmPassword.style.border = 'thin solid red';
        errorMsg.style.display = "inline";
    }
})


const length = document.getElementById("length");
const mess = document.getElementById('message');

passwordInput.addEventListener('blur', () => {
    if (passwordInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
        mess.style.display = "none"
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
        mess.style.display = "inline"
    }
})