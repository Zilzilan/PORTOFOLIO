let usia = 30
usia = 30

prompt ('berapa usia anda' )
alert ('Boong bet ternyata usia kamu' + usia )
 
  const loginBtn = document.getElementById("loginBtn");

 
  loginBtn.style.backgroundColor = "gray";
  loginBtn.style.color = "white";

  
  loginBtn.onmouseover = function() {
    loginBtn.style.backgroundColor = "red";
    loginBtn.style.color = "white";
    loginBtn.innerText = "Yakiin??" ;
    loginBtn.style.cursor = "pointer"; 
  };

  
  loginBtn.onmouseout = function() {
    loginBtn.style.backgroundColor = "gray";
    loginBtn.style.color = "white";
    loginBtn.innerText ="Login";    


  };

