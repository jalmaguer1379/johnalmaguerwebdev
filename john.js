 function clickMe1(berg) {
                   document.getElementById("javascriptnew").innerHTML = "Thats a burger!! so big and juicy";
                   var img1 = document.createElement("img");
                   img1.src = "images/historyofburger.jpg";
                   var src = document.getElementById("javascriptnew");
                   src.appendChild(img1);
 }

 function clickMe2(rell) {
    document.getElementById("javascriptnew").innerHTML = "Un relleno guey!!!";
    var img2 = document.createElement("img");
    img2.src = "images/rellenohistory.jpg";
    var src2 = document.getElementById("javascriptnew");
    src2.appendChild(img2);
    
    
    
                        

 }

 function clickMe3(chik) {
    document.getElementById("javascriptnew").innerHTML = "When im feeling healthy";
    var img3 = document.createElement("img");
    img3.src = "images/chiksalad.jpg";
    var src3 = document.getElementById("javascriptnew");
    src3.appendChild(img3);
    
 }

 function clickMe4(pasta) {
    document.getElementById("javascriptnew").innerHTML = "Its a me!!! Pasta";
    var img4 = document.createElement("img");
    img4.src = "images/mario.jpg";
    var src4 = document.getElementById("javascriptnew");
    src4.appendChild(img4);
    
 }

 function HideIt() {

         document.getElementById("javascriptnew").innerHTML = "Click em again";


 }

 function VerifyForm(email) {

      var emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


      if (document.getElementById("email1").value.match(emailFormat) || document.getElementById("email").value.match(emailFormat))  {

                     alert("Thanks for being a member!")
      }

      else  {
               alert("Please sign up using our form below")
      }

   

            

        
 }
