function validate(){
    var num=document.myform.number.value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("cnfpass").value; 
        if (isNaN(num)){
            alert("Contact should be numeric value only!")
            return false;
        }
        else if(password !== confirmPassword){
            alert("passwords not matching!");
            return false;
        }
        else{
            return true;
            }
}