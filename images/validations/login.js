let main=document.getElementById("main");
let userlogin=document.getElementById("user");
let adminlogin=document.getElementById("admin");
let register=document.getElementById("register");
let users=[{userName:"test@mail.com",password:"Test4281"}];
let admins=[{id:"20BC5",password:"admiN487"}];
function homeFunction(){
    adminlogin.style.display="none";
    userlogin.style.display="none";
    register.style.display="none";
    main.style.removeProperty("display");
}
function userFunction(){
    main.style.display="none";
    adminlogin.style.display="none";
    register.style.display="none";
    userlogin.style.display="flex";
}
function adminFunction(){
    main.style.display="none";
    userlogin.style.display="none";
    register.style.display="none";
    adminlogin.style.display="flex";
}
function registerFunction(){
    userlogin.style.display="none";
    main.style.display="none";
    adminlogin.style.display="none";
    register.style.display="flex";
}
function userValidate(){
    let usname=document.getElementById("signName").value;
    let upass=document.getElementById("signPass").value;
    if(usname==""||upass=="")
    {
        alert("Enter valid credentials");
        return false;
    }
    for(var i=0;i<users.length;i++)
    {
        if(usname===users[i].userName)
        {
            if(upass===users[i].password)
            {
                return true;
            }
            else
            {
                alert("Invalid password");
                return false;
            }
        }
        else
        {
            alert("Invalid Username");
            return false;
        }
    }
    return false;
}
function registrationValidate(){
    let uname=document.getElementById("uname");
    let umail=document.getElementById("umail");
    let umob=document.getElementById("umob");
    let ucpass=document.getElementById("ucpass");
    let upass=document.getElementById("upass");
    if(uname.value=="" || umail.value=="" || umob.value=="" || ucpass.value=="" || upass.value=="")
    {
        alert("Blank entries are not allowed!")
        return false;
    }
    if(!emailverify(umail.value))
    {
        alert("Invalid email address");
        return false;
    }
    if(!passwordValidate(ucpass.value) || !passwordValidate(upass.value))
    {
        return false;
    }
    if(upass.value!==ucpass.value)
    {
        alert("Passwords do not match!");
        return false;
    }
    else{
        alert("User registered Successfully,Login using email and password");
        let user=new Object();
        user.name=umail.value;
        user.password=upass.value;
        users.push(user);
        return true;
    }
}
function adminValidate(){
    let adname=document.getElementById("adname").value;
    let adpass=document.getElementById("adpass").value;
    if(adname==""|| adpass=="")
    {
        alert("Enter valid credentials");
        return false;
    }
    for(var i=0;i<admins.length;i++)
    {
        if(adname===admins[i].id)
        {
            if(adpass===admins[i].password)
            {
                return true;
            }
            else
            {
                alert("Invalid password");
                return false;
            }
        }
        else
        {
            alert("Invalid Username");
            return false;
        }
    }
    return false;
}
function emailverify(emailid)
{
    var mailformat=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(emailid.match(mailformat))
    {
        return true;
    }
    return false;
}
function passwordValidate(password)
{
    var hasUppercase=false;
    var hasLowercase=false;
    var hasDigit=false;

    if(password.length<8)
    {
        alert("Password must be atleast 8 characters long");
        return false;
    }
    for (var i = 0; i < password.length; i++) {
        var char = password.charAt(i);
    
        if (char >= 'A' && char <= 'Z') {
          hasUppercase = true;
        } else if (char >= 'a' && char <= 'z') {
          hasLowercase = true;
        } else if (char >= '0' && char <= '9') {
          hasDigit = true;
        }
      }
    if(!hasUppercase)
    {
        alert("Password must contain atleast one uppercase letter");
        return false;
    }
    if(!hasLowercase)
    {
        alert("Password must contain atleast one lowecase letter");
        return false;
    }
    if(!hasDigit)
    {
        alert("Password must contain atleast one digit");
        return false;
    }
    else{
        return true;
    }

}
