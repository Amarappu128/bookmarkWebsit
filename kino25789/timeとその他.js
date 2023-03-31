//ここから下パスワード

function password() {
    //表示、非表示
    var pwd = document.getElementById('password');
    var pwdCheck = document.getElementById('password-check');
    pwdCheck.addEventListener('change', function() {
        if (pwdCheck.checked) {
            pwd.setAttribute('type', 'text');
        } else {
            pwd.setAttribute('type', 'password');
        }
    }, false);
}

function test() {
    const pwd = document.getElementById('password');
    var one = document.getElementById('kino');
    if (pwd.value == "a") {
        one.style.display = "block";
    } else {
        one.style.display = "none";
    }
    //        document.getElementById("test").textContent = yj;
}
//常に実行しておきたいもの↓
//setInterval(day,1);
// setInterval(password, 1);