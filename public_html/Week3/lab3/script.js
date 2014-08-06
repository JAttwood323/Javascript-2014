/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
            
            //Beneath here, I initalize the array variable myAdVar, which will contain the Ad variable values
            var myAdVar=[];
            //Beneath here, I add values 0,1,2,3, and 4 to the array myAdVar by "push"-ing them in
            myAdVar.push ({
                "text" : 'First Ad', //text is the value that will appear in the ad box on the website
                "title" : 'Ad Number 1' //title is the page title that will appear with the ad
            });
            myAdVar.push ({
                "text" : ' Second Ad',
                "title" : 'Ad Number 2'
            });
            myAdVar.push ({
                "text" : 'Third  Ad',
                "title" : 'Ad Number 3'
            });
            myAdVar.push ({
                "text" : 'Fourth  Ad',
                "title" : 'Ad Number 4'
            });
            myAdVar.push ({
                "text" : 'Last  Ad',
                "title" : 'Ad Number 5'
            });
            
           var x = Math.floor ( Math.random()*5); //This selects a random number between 0-4
           var div = document.getElementById("ad"); //This initialized "div" as the "ad" div on the HTML page
           
           div.innerHTML = myAdVar[x].text;
           //This replaced the text in the ad on the HTML page to the text
           // hosted in the myAdVar array value chosen 
           // above by the random number method
           console.log(x);
           //This shows which ad was selected in the log
          
            document.title = myAdVar[x].title + '...';
            //This replaces The title of the page with the corresponding
            //title to the ad chosen above.
            

