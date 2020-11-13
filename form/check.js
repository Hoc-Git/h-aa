function getinfo() {
    var username = document.getElementById("fname").value;
    var password = document.getElementById("pass").value;
    if (username == "") {
        document.getElementById("error1").innerHTML = "Tên đăng nhập không đúng";
    } else {
        document.getElementById("error1").innerHTML = "";
    }
    if (password == "") {
        document.getElementById("error2").innerHTML = "Mật khẩu không đúng";
    } else {
        document.getElementById("error2").innerHTML = "";
    }
}