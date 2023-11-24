function SubmitForm(event) {
  event.preventDefault();

  const firstname = document.querySelector("#firstname").value;
  const lastname = document.querySelector("#lastname").value;
  const academicid = document.querySelector("#academicid").value;
  const email = document.querySelector("#email").value;
  const telephone = document.querySelector("#telephone").value;
  const address = document.querySelector("#address").value;
  const department = document.querySelector("#department").value;
  const password = document.querySelector("#password").value;
  const repeatpassword = document.querySelector("#repeatpassword").value;



  validateForm(password, repeatpassword);

  insert_signup_data(firstname, lastname, academicid, email, telephone, address, department, password, repeatpassword)



}


function validateForm(password, repeatpassword) {

  const message = document.getElementById("message");

  if (password !== repeatpassword) {
    message.innerHTML = "Passwords do not match!";
  } else {
    message.innerHTML = "";
    return;
  }

}

function insert_signup_data(firstname, lastname, academicid, email, telephone, address, department, password, repeatpassword) {

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      // If true then...
      const nomresponse = JSON.parse(xhr.responseText);
      console.log(nomresponse);

    } else {
      // If false then...
      console.log('error', xhr);
      // window.alert("Wrong username or password. Try again");
      // window.location.href = "book.html";
    }
  };

  xhr.open('POST', "login_query.php");
  xhr.setRequestHeader("Content-Type", "application/json");
  const data = {};

  data.firstname = firstname;
  data.lastname = lastname;
  data.academicid = academicid;
  data.email = email;
  data.telephone = telephone;
  data.address = address;
  data.department = department;
  data.password = password;
  data.repeatpassword = repeatpassword;


  // data.time=now;
  xhr.send(JSON.stringify(data));
}





const MainForm = document.querySelector("#signup");
MainForm.addEventListener("submit", SubmitForm);