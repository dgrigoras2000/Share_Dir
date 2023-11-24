function SubmitForm(event){
  
    console.log("firstname");
    event.preventDefault();
    console.log("firstname");

    const firstname = document.querySelector("#firstname").value;
    const lastname = document.querySelector("#lastname").value;
    const academicid = document.querySelector("#academicid").value;
    const email = document.querySelector("#email").value;
    const telephone = document.querySelector("#telephone").value;
    const address = document.querySelector("#address").value;
    const department = document.querySelector("#department").value;
    const password = document.querySelector("#password").value;
    const repeatpassword = document.querySelector("#repeatpassword").value;

    console.log("firstname");
    console.log(firstname);
    console.log(lastname);
    console.log(academicid);
    console.log(email);
    console.log(telephone);
    console.log(address);
    console.log(department);
    console.log(password);
    console.log(repeatpassword);



    // validateForm(password,repeatpassword);





}


function validateForm(password,repeatpassword) {

    const message = document.getElementById("message");

    if (password !== repeatpassword) {
      message.innerHTML = "Passwords do not match!";
    } else {
      message.innerHTML = "";
    }
  }





const MainForm = document.querySelector("#signupbtnid");
MainForm.addEventListener("submit", SubmitForm);