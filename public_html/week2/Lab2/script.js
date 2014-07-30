/*
 * Make sure to validate that an email is 
 * entered into the input(just that it has a length.
 * 
 * Validate the comments field to make sure that is has
 * a length greater than 0 and less than 150.
 */
    
  function submitForm() {
    
    var fullname = document.getElementById("name");
    var fullnameErr = document.getElementById("err_name");
    var emailaddress = document.getElementById("email");
    var emailaddressErr = document.getElementById("err_email");
    var commentter = document.getElementById("comments");
    var commentterErr = document.getElementById("err_comments");
    
    var hasErrors = false;
    
    if ( fullname.value.length ) {
        fullname.classList.remove('bad');
        fullname.classList.add('good');        
        fullnameErr.innerHTML = '';
        
    } else {
        hasErrors = true;
        fullname.classList.remove('good');
        fullname.classList.add('bad');       
        fullnameErr.innerHTML = "<p>Full Name is not valid.</p>";       
    }
    if ( emailaddress.value.length ) {
        emailaddress.classList.remove('bad');
        emailaddress.classList.add('good');        
        emailaddressErr.innerHTML = '';
        
    } else {
        hasErrors = true;
        emailaddress.classList.remove('good');
        emailaddress.classList.add('bad');   
        emailaddressErr.innerHTML = "<p>Email Address is not valid.</p>"
        
    }if ( commentter.value.length < 1 || commentter.value.length > 150) {
        hasErrors = true;
        commentter.classList.remove('good');
        commentter.classList.add('bad');       
        commentterErr.innerHTML = "<p>Comment is not valid.</p>";  
        
    } else {
        commentter.classList.remove('bad');
        commentter.classList.add('good');        
        commentterErr.innerHTML = '';     
    }
    
    
}