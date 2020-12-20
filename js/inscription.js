// Clock animation

const hoursDiv = document.getElementById('seconds');
const minutesDiv = document.getElementById('minutes');
const secondsDiv = document.getElementById('hours');


function setDate(){
    
    const now = new Date();
    const seconds = now.getSeconds();
    const secDeg = ((seconds/60)* 360 + 90);
    secondsDiv.style.transform = `rotate(${secDeg}deg)`;
    
    
    const mins = now.getMinutes();
    const minDeg = ((mins/60) * 360) + ((seconds/60)*6) + 90;
    minutesDiv.style.transform = `rotate(${minDeg}deg)`;
    
    
    const hour = now.getHours();
    const hourDeg = ((hour/12)*360) + ((mins/60)*30) + 90;
    hoursDiv.style.transform = `rotate(${hourDeg}deg)`;
      
}
setInterval(setDate,1000);


// Utilisation des ReGexp
let Pseudo = document.getElementById('Pseudo');
Pseudo.addEventListener('input', validPseudo ); 
    
let Password = document.getElementById('Mail');
Password.addEventListener('input', validPassword );

let Pseudo = document.getElementById('Password');
Pseudo.addEventListener('input', validPseudo ); 
    
let Password = document.getElementById('confirmPassword');
Password.addEventListener('input', validPassword );

function validPseudo() {
//    Interdiction des espaces et des apostrophes, chaîne de caractère entre 2 et 18 caractères
    let PseudoRegexp = new RegExp(/`^([a-zA-Z0-9-_]{2,36})$`/);
    let ErrorPseudo = document.getElementById('ErrorPseudo');

    if (PseudoRegexp.test(Pseudo.value) == true) {
        ErrorPseudo.textContent = 'Pseudo valide';
        ErrorPseudo.style.color = 'green';
    } else {
        ErrorPseudo.innerHTML ='Pseudo non valide';
        ErrorPseudo.style.color = 'red';
    }
}

function validMail() {
    //    Interdiction des espaces et des apostrophes, chaîne de caractère entre 2 et 18 caractères
        let MailRegexp = new RegExp(/^[a-zA-Z0-9.-]+[@]{1}[a-zA-Z0-9.-]+[.]{1}[a-z]{2,10}$/);
        let ErrorMail = document.getElementById('ErrorMail');
    
        if (MailRegexp.test(Mail.value) == true) {
            ErrorMail.textContent = 'Mail valide';
            ErrorMail.style.color = 'green';
        } else {
            ErrorMail.innerHTML ='Mail non valide';
            ErrorMail.style.color = 'red';
        }
    }

function validPassword() {
    // Minimum de huit caractères, au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial
    let PasswordRegexp = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
    let ErrorPassword = document.getElementById('ErrorPassword');

    if (PasswordRegexp.test(password.value) == true) {
        ErrorPassword.textContent = 'Password passe valide';
        ErrorPassword.style.color = 'green';
    } else {
        ErrorPassword.innerHTML ='Password non valide';
        ErrorPassword.style.color = 'red';
    }
}

function validConfirmPassword() {
    //    Interdiction des espaces et des apostrophes, chaîne de caractère entre 2 et 18 caractères
        let ConfirmPasswordRegexp = new RegExp(//);
        let ErrorConfirmPassword = document.getElementById('ErrorConfirmPassword');
    
        if (ConfirmPasswordRegexp.test(ConfirmPassword.value) == true) {
            ErrorConfirmPassword.textContent = 'ConfirmPassword valide';
            ErrorConfirmPassword.style.color = 'green';
        } else {
            ErrorConfirmPassword.innerHTML ='ConfirmPassword non valide';
            ErrorConfirmPassword.style.color = 'red';
        }
    }