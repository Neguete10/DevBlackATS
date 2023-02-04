function validate(){
  var emailID = document.form1.email.value;
  atpos = emailID.indexOf("@");
  dotpos = emailID.lastIndexOf(".");
  
  if (atpos < 1 || ( dotpos - atpos < 2 )) {
     alert("Por favor digite um email valido!")
     document.form1.email1.focus() ;
     return false;
  }
  return( true );
}

function validate2(){
  var emailID = document.form2.email.value;
  atpos = emailID.indexOf("@");
  dotpos = emailID.lastIndexOf(".");
  
  if (atpos < 1 || ( dotpos - atpos < 2 )) {
     alert("Por favor digite um email valido!")
     document.form1.email1.focus() ;
     return false;
  }
  return( true );
}




