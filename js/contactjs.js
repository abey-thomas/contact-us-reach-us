console.log('it works')

$(document).ready(function(){
         var flag=0;

    $('.submit').click(function (event) {

       // event.preventDefault()
        //console.log('Clicked button')
        
       var name=$('.name').val()
       var email=$('.email').val()
       var phno=$('.phno').val()
       var subject=$('.subject').val()
       var message=$('.message').val()
       var statusElm=$('.status')
       var pattern1 = /^\d{10}$/;
       var pattern2= /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/;
       var pattern=/^[a-zA-Z]*$/;


       if(name.length==0 || email.length==0 || phno.length==0||subject.length==0||message.length==0)
       {
        alert("Enter all the fields");
        flag=1;
        return false;
       }


       if(!pattern.test(name))
            {
               alert("invalid name");
                       flag=1;
               return false;
            } 
        
        
      if(!email.length > 5 && email.includes('@') && email.includes('.')) 
    {
           alert("not valid,please enter valid email-id");
                       flag=1;
           return false;
                           
       } 
      
      if(!/^\d*$/.test(phno)) 
             {
                     
                alert("Only numbers for Phone number");
                       flag=1;
                return false;
             } 
       
        
        
          if(phno.length !== 10)
             {
                 alert("invalid Phone number 10 digits required");
                       flag=1;
                 return false;
             }
             
               
        
       if (subject.length>10)
       {
          alert("Subject is invalid");
                       flag=1;
          return false;
       }
        
        
        if(message.length>20)
        {
           alert(" Message is invalid");
                       flag=1;
           return false;
        }

        


final();

    })

  
})