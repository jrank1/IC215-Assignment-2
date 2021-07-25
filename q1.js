//document.getElementById("errors").style.disp./,lay = "none";

function checkForEmptyFields(){
  //create array and var
  var name = document.forms["Formq1"]["name"];
  var phone = document.forms["Formq1"]["phone"];
  var email = document.forms["Formq1"]["email"];
  var pass = document.forms["Formq1"]["pass"];

  var fields = new Array;
  var fields = [name, phone, email, pass];
  var message = "";
  var status = false;

  //loop
  for (i=0;i<fields.length;i++){
    if(fields[i].value == "" || fields[i].value == null) {
        message += fields[i].name + ", ";
        finalerr = "The following fields can't be empty: " + message;
    }
    
  }
  //use if else to check if there is any error and submit
  if (message == ""){
    document.forms.submit();
    status = true;
  }
  else{
    //alert(finalerr);
    document.getElementById("errors").style.display = "block";
    document.getElementById("errmessage").innerHTML = finalerr;
    status = false;
  }
  return status;
};
