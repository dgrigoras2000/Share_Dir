function SubmitForm(event) {

    event.preventDefault();

    const username = document.querySelector("#username");
    const password = document.querySelector("#password");

    usernamevalue = username.value;
    passwordvalue = password.value;

    check_login_data(usernamevalue, passwordvalue);

}

function check_login_data(username, password) {

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;
        if (xhr.status >= 200 && xhr.status < 300) {
            // If true then...
            const nomresponse = JSON.parse(xhr.responseText);
            console.log(nomresponse);
            if (nomresponse.username = "User1") {
                // Do something...
                // window.location.href = "book.html";
            }
            else if (nomresponse.username = "User2") {
                // Do something...
                // window.location.href = "book.html";
            }
            else if (nomresponse.username = "User3") {
                // Do something...
                // window.location.href = "book.html";
            }
            else {
                return
            }


        } else {
            // If false then...
            console.log('error', xhr);
            window.alert("Wrong username or password. Try again");
        }
    };

    xhr.open('POST', "login_query.php");
    xhr.setRequestHeader("Content-Type", "application/json");
    const data = {};

    data.username = username;
    data.password = password;

    // data.time=now;
    xhr.send(JSON.stringify(data));
}


const MainForm = document.querySelector("#login");
MainForm.addEventListener("submit", SubmitForm);