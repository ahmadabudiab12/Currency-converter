var registerForm=document.querySelector(".registerForm");

registerForm.onsubmit = function(e){
e.preventDefault();
var elements= e.target.elements
var amount = elements['amount'].value;



var select=document.querySelector("select");
   var exch = select.value;
 console.log(exch);

 var newamount;
 if(exch=="dollar"){
    newamount = amount*3.6511
 }
 else if(exch=="dinar"){
    newamount = amount*	5.1503
 } else {
    newamount = amount
 };
 

 var result = document.querySelector(".result")
 result.innerHTML= newamount;
};



