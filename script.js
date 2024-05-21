function login() {
  const username = document.querySelector('.login').value;
  const password = document.querySelector('.password').value;
  if (username == "" || password == "") {
    alert("Введите логин и пароль");
  } else {
    alert("Вы вошли в систему\nЛогин: " + username + "\nПароль: " + password);
  }
}
function register() {
  const username = document.querySelector('.login').value;
  const password = document.querySelector('.password').value;
  const passwordconfirm = document.querySelector('.passwordconfirm').value;
  if (username == "" || password == "" || passwordconfirm == "") {
    alert("Введите логин, пароль и подтверждение пароля");
  } else {
    if (password == passwordconfirm) {
      alert("Вы зарегистрировались в системе\nЛогин: " + username + "\nПароль: " + password);
    } else {
      alert("Пароли не совпадают");
    }
  }
}
function submit() {
    const username = document.querySelector('.login').value;
  const password = document.querySelector('.password').value;
  const passwordconfirm = document.querySelector('.passwordconfirm').value;
  if (username == "" || password == "" || passwordconfirm == "") {
    alert("Введите логин, пароль и подтверждение пароля");
  } else {
    if (password == passwordconfirm) {
      alert("Вы подали заявку о смене пароля в системе\nЛогин: " + username + "\nПароль: " + password);
    } else {
      alert("Пароли не совпадают");
    }
  }
}