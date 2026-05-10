function checkForm(el) {
    var pass = el.pass.value;
    var email = el.email.value;
    var fail="";
    
    if (pass =="" || email =="" ||)
        faill ="Заполните все поля";
    else if(email.length <= 2 || email.length > 150)
        fail ="Введите корректную почту";
    else if(pass.split("&").length > 1)
        fail="Пароль не должен содержать &";
    if(fail !=""){
        return false;
    }else{
        alert("Все данные корректно заполнены");
        return true;
        form.submit();
    }
}