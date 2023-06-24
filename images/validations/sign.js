let userlogin = document.getElementById("user");
let register = document.getElementById("register");
let users = [{ userName: "test@mail.com", password: "Test4281" }];
function registerFunction() {
  userlogin.style.display = "none";
  register.style.display = "flex";
}
function userValidate() {
  let usname = document.getElementById("signName").value;
  let upass = document.getElementById("signPass").value;
  if (usname == "" || upass == "") {
    alert("Enter valid credentials");
    return false;
  }
  for (var i = 0; i < users.length; i++) {
    if (usname === users[i].userName) {
      if (upass === users[i].password) {
        return true;
      } else {
        alert("Invalid password");
        return false;
      }
    } else {
      alert("Invalid Username");
      return false;
    }
  }
  return false;
}
function registrationValidate() {
  let uname = document.getElementById("uname");
  let umail = document.getElementById("umail");
  let umob = document.getElementById("umob");
  let ucpass = document.getElementById("ucpass");
  let upass = document.getElementById("upass");
  if (
    uname.value == "" ||
    umail.value == "" ||
    umob.value == "" ||
    ucpass.value == "" ||
    upass.value == ""
  ) {
    alert("Blank entries are not allowed!");
    return false;
  }
  if (!emailverify(umail.value)) {
    alert("Invalid email address");
    return false;
  }
  if (!passwordValidate(ucpass.value) || !passwordValidate(upass.value)) {
    return false;
  }
  if (upass.value !== ucpass.value) {
    alert("Passwords do not match!");
    return false;
  } else {
    alert("User registered Successfully,Login using email and password");
    let user = new Object();
    user.name = umail.value;
    user.password = upass.value;
    users.push(user);
    return true;
  }
}
function emailverify(emailid) {
  var mailformat =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (emailid.match(mailformat)) {
    return true;
  }
  return false;
}
function passwordValidate(password) {
  var hasUppercase = false;
  var hasLowercase = false;
  var hasDigit = false;

  if (password.length < 8) {
    alert("Password must be atleast 8 characters long");
    return false;
  }
  for (var i = 0; i < password.length; i++) {
    var char = password.charAt(i);

    if (char >= "A" && char <= "Z") {
      hasUppercase = true;
    } else if (char >= "a" && char <= "z") {
      hasLowercase = true;
    } else if (char >= "0" && char <= "9") {
      hasDigit = true;
    }
  }
  if (!hasUppercase) {
    alert("Password must contain atleast one uppercase letter");
    return false;
  }
  if (!hasLowercase) {
    alert("Password must contain atleast one lowecase letter");
    return false;
  }
  if (!hasDigit) {
    alert("Password must contain atleast one digit");
    return false;
  } else {
    return true;
  }
}

// Function to handle signing in with Gmail
function signInWithGmail() {
  // Perform the Gmail sign-in process
  // Redirect the user to the Gmail authorization page
  var clientId =
    "805990898205-9kiunv2931evemr93rg4c3qa23c6p4al.apps.googleusercontent.com";
  var redirectUri = "http://127.0.0.1:8080/user.html"; // Replace with your actual redirect URI
  var scope = "email profile";
  var state = "YOUR_STATE"; // Replace with your actual state value

  var authUrl =
    "https://accounts.google.com/o/oauth2/auth" +
    "?response_type=code" +
    "&client_id=" +
    clientId +
    "&redirect_uri=" +
    encodeURIComponent(redirectUri) +
    "&scope=" +
    encodeURIComponent(scope) +
    "&state=" +
    encodeURIComponent(state);

  window.location.href = authUrl;
  
}

/*function signInWithLinkedIn() {
  var clientId = "86wuqob1d47vcj"; // Replace with your LinkedIn client ID
  var redirectUri = "http://127.0.0.1:8080/user.html"; // Replace with your actual redirect URI
  var scope = "r_liteprofile r_emailaddress"; // Replace with the LinkedIn scopes you require
  var state = "YOUR_STATE"; // Replace with your actual state value

  var authUrl =
    "https://www.linkedin.com/oauth/v2/authorization" +
    "?response_type=code" +
    "&client_id=" +
    clientId +
    "&redirect_uri=" +
    encodeURIComponent(redirectUri) +
    "&scope=" +
    encodeURIComponent(scope) +
    "&state=" +
    encodeURIComponent(state);

  window.location.href = authUrl;
}*/

