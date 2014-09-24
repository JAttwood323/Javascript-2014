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

function phoneValidate ( str){
        var phoneRegex = /^[2-9]\d{2}-\d{3}-\d{4}/;
        return phoneRegex.test(str);
}

var userdata = []; //initializes JSON array

    

function submitForm(){
    
    var name = document.getElementById("fullname");
    var nameErr = document.getElementById("fullname_err");
    var email = document.getElementById("email");
    var emailErr = document.getElementById("email_err");
    var comments = document.getElementById("description");
    var commentsErr = document.getElementById("description_err");
    var phone = document.getElementById("phone");
    var phoneErr = document.getElementById("phone_err");
    
    var hasErrors = false; //I use hasErrors variable to tell me whether or not the form validated :D
    
                                                //BELOW, I start validation
        if ( !name.value.length ) {
                hasErrors = true;
                name.classList.remove('good');
                name.classList.add('bad');
                nameErr.innerHTML = "Please enter name ";
        } 
        else if ( SpaceAlphaValidate( name.value ) === false ) {
                hasErrors = true;
                name.classList.remove('good');
                name.classList.add('bad');
                nameErr.innerHTML = "Name needs Alpha characters";
        } 
        else {
                name.classList.remove('bad');
                name.classList.add('good');
                nameErr.innerHTML = "";
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
    
    
    
    if ( !phone.value.length ) {
                hasErrors = true;
                phone.classList.remove('good');
                phone.classList.add('bad');       
                phoneErr.innerHTML = 'Please Enter E-mail';
        
    } 
    
            else if ( phoneValidate (phone.value) === false) { //SET FALSE
                hasErrors = true;
                phone.classList.remove('good');
                phone.classList.add('bad');
                phoneErr.innerHTML = "Poop";
    }
    
            else {
                phone.classList.remove('bad');
                phone.classList.add('good');
                phoneErr.innerHTML = "";
        
    }
    
    
    
    
    comments.value = strip_HTML(comments.value); //FOR DESCRIPTION
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

    if(hasErrors === false){ //If validation passes, calls storager function
        
            storager(name, phone, email, comments);
            
    }
        
}

function storager(name, phone, email, comments){ //stores data to local storage
    
    
        if(name!==""){ //checks to see if clearing bottom row or not
            userdata.push({"num": "", "name":name.value, "phone":phone.value, "email": email.value, "description":comments.value});
        }
            localStorage.setItem('userdata', JSON.stringify(userdata) );

            var form = document.getElementById("mainform");
            form.reset(); //empties out input form
            printout(); //calls printout function
            
    
}

function printout(){
    
        var storageData = ( typeof(localStorage.getItem('userdata')) === 'string' ? localStorage.getItem('userdata') : '' );
        var tablewrite = document.getElementById("tableData");
        var cellText = "";
        var localData = localStorage.getItem('userdata');

           var dataObj = JSON.parse(localData); //creates array variable called from local storage
         for(var x=0; x<userdata.length; x++){ //runs through array, saving all info to string
          cellText = cellText + "<tr><td>" + x + "</td><td>" + dataObj[x].name + "</td><td>" + dataObj[x].email + "</td><td>" + dataObj[x].phone + "</td><td>" + dataObj[x].description + "</td></tr>";
         }
      tablewrite.innerHTML=cellText; //writes table based on string from for loop
    }




function localClear(){ //clears all data, empties table
    localStorage.clear(); //clears localStorage
    userdata = []; //resets main global array
    var tablewrite = document.getElementById("tableData");
    tablewrite.innerHTML="";
}


function rowClear(){ //clears bottom row only
    
        userdata.pop();
        storager("", "", "", ""); //calls storager to save without last row

}



