function SpaceAlphaValidate( str ) {
        var alphaRegex = /^[a-zA-Z ]+$/;
        return alphaRegex.test(str);			
}

function EmailValidate ( str ) {
        
        var emailRegex = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(str);
}

function strip_HTML(str) {
        var findHtml = /<(.|\n)*?>/gi;
        return str.replace(findHtml,"");
}



                  
                  

                  
                  
                  
                  
function submitForm() {
    
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var fnameErr = document.getElementById("err_fname");
    var lnameErr = document.getElementById("err_lname");
    var email = document.getElementById("email");
    var emailErr = document.getElementById("err_email");
    var comments = document.getElementById("comments");
    var commentsErr = document.getElementById("err_comments");
    
    var hasErrors = false;
   
    
    if ( !fname.value.length ) {
                hasErrors = true;
                fname.classList.remove('good');
                fname.classList.add('bad');
                fnameErr.innerHTML = "Please enter First name ";
        } 
        
        else if ( SpaceAlphaValidate( fname.value ) === false ) {
                hasErrors = true;
                fname.classList.remove('good');
                fname.classList.add('bad');
                fnameErr.innerHTML = "First name needs Alpha characters";
        } 
        else {
                fname.classList.remove('bad');
                fname.classList.add('good');
                fnameErr.innerHTML = "";
        }

        
    
    
    
    if ( !lname.value.length ) {
                hasErrors = true;
                lname.classList.remove('good');
                lname.classList.add('bad');
                lnameErr.innerHTML = "Please enter Last name ";
        } 
        else if ( SpaceAlphaValidate( lname.value ) === false ) {
                hasErrors = true;
                lname.classList.remove('good');
                lname.classList.add('bad');
                lnameErr.innerHTML = "Last name needs Alpha characters";
        } 
        else {
                lname.classList.remove('bad');
                lname.classList.add('good');
                lnameErr.innerHTML = "";
        }   

        
   
    
    if ( !email.value.length ) {
                hasErrors = true;
                email.classList.remove('good');
                email.classList.add('bad');       
                emailErr.innerHTML = 'Please Enter E-mail';
        
    } 
    
            else if ( EmailValidate (email.value) === false) {
                hasErrors = true;
                email.classList.remove('good');
                email.classList.add('bad');
                emailErr.innerHTML = "Email must start with characters, have a @ symbol, have another set of characters have a period and end in 3 characters";
    }
    
            else {
                email.classList.remove('bad');
                email.classList.add('good');
                emailErr.innerHTML = "";
        
    }
            
    comments.value = strip_HTML(comments.value);
  
  if ( comments.value.length < 1 || comments.value.length > 150 ) {
                    
                    hasErrors = true;
                    comments.classList.remove('good');
                    comments.classList.add('bad');       
                    commentsErr.innerHTML = "Comments are not valid"; 
        } 
        
    
            else {
                  comments.classList.remove('bad');
                  comments.classList.add('good');        
                  commentsErr.innerHTML = '';
                  
    }  
    
    
    }