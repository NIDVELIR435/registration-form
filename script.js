let BtnSighUp = document.querySelector('#body__button').addEventListener('click', BtnSighUpFUNC);
let ConfirmPasswordInput = document.querySelector('#password2').addEventListener('input', _compairePassword);

let genderStatus;
function _genderChoice() {    //* функция выбора гендера. Передает параметры в переменную и возвр. true
   if (document.querySelector('#radio-1').checked == true) {
      genderStatus = 'Male';
      return true;
   } else if (document.querySelector('#radio-2').checked == true) {
      genderStatus = 'Female';
      return true;
   } else if (document.querySelector('#radio-3').checked == true) {
      genderStatus = "Other";
      return true;
   }
}

document.querySelector('.mail-error-message').style.display = 'none'; // скрывает надпись о неправильном вводе мейла
document.querySelector('#email').addEventListener('blur', _compareMail); // при вводе, вызивает функцию проверки правильности ввода
let currentMail;
function _compareMail() {     //* проверяет мейл на верность ввода при вызове
   let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   let address = document.querySelector('#email').value;
   if (reg.test(address) == false) {
      document.querySelector('.mail-error-message').style.display = '';
      document.querySelector('.mail').style.border = '1px solid #D23737';
      currentMail = '';
      return false;
   } else {
      currentMail = address;
      document.querySelector('.mail-error-message').style.display = 'none';
      document.querySelector('.mail').style.border = '';
      return true;
   }
}

document.querySelector('.password-error-message').style.display = 'none';//скрывает надпись о несовпадении паролей
document.querySelector('#password2').addEventListener('input', _compairePassword);
document.querySelector('#password1').addEventListener('input', _compairePassword);
let currentPassword;
function _compairePassword() {//*проверяет пароли на совпадение
   if (document.querySelector('#password1').value.length > 6) {
      if (document.querySelector('#password1').value === document.querySelector('#password2').value) {
         document.querySelector('.password-error-message').style.display = 'none';
         document.querySelector('#password2').style.border = '';
         document.querySelector('#password1').style.border = '';
         currentPassword = document.querySelector('#password2').value;
         return true;
      } else {
         document.querySelector('.password-error-message').textContent = 'Пароли не совпадают';
         document.querySelector('.password-error-message').style.display = '';
         document.querySelector('#password2').style.border = '1px solid #D23737';
         document.querySelector('#password1').style.border = '1px solid #D23737';
         currentPassword = '';
         return false;
      }
   } else{
      document.querySelector('.password-error-message').textContent = 'Пароль должен быть больше 6 символов';
      document.querySelector('.password-error-message').style.display = '';
      document.querySelector('#password2').style.border = '1px solid #D23737';
      document.querySelector('#password1').style.border = '1px solid #D23737';
      currentPassword = '';
      return false;
   }
}

document.querySelector('#password1-button').addEventListener('mousedown', () => {
   document.querySelector('#password1').setAttribute('type', 'text');
});
document.querySelector('#password1-button').addEventListener('mouseup', () => {
   document.querySelector('#password1').setAttribute('type', 'password');
});
document.querySelector('#password2-button').addEventListener('mousedown', () => {
   document.querySelector('#password2').setAttribute('type', 'text');
});
document.querySelector('#password2-button').addEventListener('mouseup', () => {
   document.querySelector('#password2').setAttribute('type', 'password');
});

function BtnSighUpFUNC() {
   if (_genderChoice() && _compareMail() && _compairePassword() === true) {
      alert(`Ваш гендер: ${genderStatus} ; Ваш mail: ${currentMail} ; Ваш пароль: ${currentPassword} .`);
   } else {
      alert('Пожалуйста введите данные корректно.')
   }
}
