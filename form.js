function validate(){
    var up=/^[A-Za-z]+$/
    var pp=/^[6-9]{1}[0-9]{9}$/

    var un=document.getElementById("uname").value
    var pv=document.getElementById("phno").value
    if(un==""){
        document.getElementById("msg").innerHTML="enter the user name"
        return false
    }
    if(un.match(up))
    true;
    else
    {
        document.getElementById("msg").innerHTML="it should contain alphabets only"
        return false
    }
    if(un.length<3){
        document.getElementById("msg").innerHTML="user name should contain minimum 3 characters"
        return false
    }
    if(un.length>9){
        document.getElementById("msg").innerHTML="should contain maximum 8 characters"
        return false
    }
    if(pv==""){
        document.getElementById("msg1").innerHTML="enter the phone number"
        return false
    }
    if(pv.match(pp))
    true;
    else
    {
        document.getElementById("msg1").innerHTML="invalid phone number"
        return false
    }
}