
//var successmsg='successfully posted data'

function check()
{
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var age =document.getElementById('age').value;
    var address = document.getElementById('address').value;
    var description = document.getElementById('description').value;
    var pin = document.getElementById('pin').value;
    var flag=0;
    var msg='';

    if (name=='' )
    {
        msg="Student Name should not be blank,";
        flag=1;
    }

    if (!(isNaN(name)) )
    {
        msg+=' Student Name should not numeric,';
        flag=1;
    }

    if (email=='')
    {
        msg+=' Student Email Id is required,';
        flag=1;
    }

    if(email!='')
    {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(reg.test(email) == false)
        {
            msg+='Invalid Email Address,';
            flag=1;
        }

    }
    
    if (age=='')
    {
        msg+=' Student Age not be blank ,';
        flag=1;
    }

    if (isNaN(age))
    {
        msg+=' Student Age should be numeric,';
        flag=1;
    }

    if (age < 18 || age > 65)
    {
        msg+=" Age should be between 18 and 100,";
        flag=1;
    }

    if (address=='')
    {
        msg+=' Student Address not be blank, ';
        flag=1;
    }

    if (!(isNaN(address)))
    {
        msg+=' Student Address not be numeric,';
        flag=1;
    }

    if (description=='')
    {
        msg+=' Student Description not be blank ,';
        flag=1;
    }

    if (!(isNaN(description)))
    {
        msg+=' Student Description not be numeric,';
        flag=1;
    }

    if (pin=='' )
    {
        msg+=' Student Pin Code not be blank ,';
        flag=1;
    } 

    if (isNaN(pin))
    {
        msg+=' Student Pin Code should be numeric,';
        flag=1;
    } 
    
    /*if (pin.length!=5 && pin.length!=10)
    {
        msg+=" Student Pin Code should be atleast 5 digit long and not more than 10 digit,";
        flag=1;
    }*/
    
    if(flag==1)
    {
        alert(msg);
    }
    else
    {
        msg="Student Signed Up successfully. "; 
        alert(msg);
        post_data();
    }


}

function post_data()
{
 alert($('#pin').val().toString());  
    var data1={
                            "user":{
                            "name":$('#name').val().toString(),
                            "email":$('#email').val().toString(),
                            "age":$('#age').val().toString(),
                            "gender":$('#gender').val().toString(),
                            "address":$('#address').val().toString(),
                            "description":$('#description').val().toString(),
                            "pincode":$('#pin').val().toString()
                            },
                            "commit":"Create User"
                };
               
                $.ajax({
        type: "POST",
        url: "http://blooming-beach-2334.herokuapp.com/users",
        data: data1,
        dataType: "json",
        success: alert("success"),
    });
   
  
}


