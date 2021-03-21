function alert() {
  Swal.fire({
    customClass: 'swalalert',
    padding: 50,
    title: "Зарегистрироваться в Glovo",
    html: `<input type="text" id="login" class="swal2-input" placeholder="Имя">
             <input type="email" id="mail" class="swal2-input" placeholder="Адрес эл. почты">
             <input type="password" id="password" class="swal2-input" placeholder="Пароль">`,
    confirmButtonText: 'Зарегистрироваться',
    confirmButtonColor: '#00a082',
    preConfirm: () => {
    const login = Swal.getPopup().querySelector('#login').value
    const email=Swal.getPopup().querySelector('#mail').value
    const password = Swal.getPopup().querySelector('#password').value
    if (!login) {
    Swal.showValidationMessage(`Пожалуйста введите имя`)
    }else if (!email) {
    Swal.showValidationMessage(`Пожалуйста введите эл. почту`)
    }else if(!password){
    Swal.showValidationMessage(`Пожалуйста введите пароль`)
    }
    return { login: login, password: password, email:email }
   }
  }).then((result) => {
  Swal.fire({
    customClass: 'swalalert1',
    html:
  `
    Имя: ${result.value.login} <br>
    Эл. почта: ${result.value.email} <br>
    Пароль: ${result.value.password}
  `,
  confirmButtonText: 'Готово',
  confirmButtonColor: '#00a082'
})
})
}
function alert1() {
  Swal.fire({
    customClass: 'swalalert2',
    padding: 50,
    title: "Зарегистрироваться в Glovo",
    html: `  <input type="email" id="mail" class="swal2-input" placeholder="Адрес эл. почты">
             <input type="password" id="password" class="swal2-input" placeholder="Пароль">`,
    confirmButtonText: 'Войти',
    confirmButtonColor: 'white',
    preConfirm: () => {
    const email=Swal.getPopup().querySelector('#mail').value
    const password = Swal.getPopup().querySelector('#password').value
    if (!email) {
    Swal.showValidationMessage(`Пожалуйста введите эл. почту`)
    }else if(!password){
    Swal.showValidationMessage(`Пожалуйста введите пароль`)
    }
    return {password: password, email:email }
   }
  }).then((result) => {
  Swal.fire({
    customClass: 'swalalert3',
    html:
  `
    Эл. почта: ${result.value.email} <br>
    Пароль: ${result.value.password}
  `,
  confirmButtonText: 'Вы вошли',
  confirmButtonColor: 'white'
})
})
}
