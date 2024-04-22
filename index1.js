document.getElementById("subbtn").addEventListener("click",validateForm);

function validateForm() 
{
    if (validateName() && validatePhone() && validateAddress() && validateQuantity() ) 
    {
        alert("Order Received. Thanks for Choosing us!");
        addEventListener();
    }
}

function addEventListener() 
{
    var m = "https://docs.google.com/forms/d/e/1FAIpQLSe3sePnFqsx5QnNqCEfoOQjTCLFk2N4HEBuE4GqvaTtOjL0ig/formResponse";
    var a = "?&entry.949484299="+document.getElementById("Name").value;
    var b = "&entry.1333032901="+document.getElementById("Phone").value;
    var c = "&entry.1951607115="+document.getElementById("Address").value;
    var d = "&entry.1045520191="+document.getElementById("Item").value;
    var e = "&entry.1299682482="+document.getElementById("Quantity").value;

    var url = m + a + b + c + d + e;
    window.open(url, '_blank');
};

function redirect()
{
    window.location.close();
}

function validateName() 
{
    var name = document.getElementById('Name').value;
    if(name.length == 0) 
    {
        alert("Name can't be blank!") ;
        return false;
    }
    if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) 
    {
        alert("Please enter your correct name!") ;//Validation Message
        return false;
    }
    return true;
}

function validatePhone() 
{
    var phone = document.getElementById('Phone').value;
    if(phone.length == 0) 
    {
        alert("Phone number can't be blank!") ;//Validation Message
        return false;
    }
    if(!phone.match(/^[0]?[789]\d{9}$/)) {
        alert("Please enter a correct phone number!") ;//Validation Message
        return false;
    }
    return true;
}

function validateAddress ()
{
    var add = document.getElementById('Address').value;
    if (add.length == 0)
    {
        alert("Please fill in the address!");
        return false;
    }
    return true;
}

function validateQuantity ()
{
    var quan = document.getElementById('Quantity').value;
    if (quan.length == 0)
    {
        alert("Please fill in the quantity required!");
        return false;
    }
    return true;
}

