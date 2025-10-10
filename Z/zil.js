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

 const el = document.getElementById('zil');
if (!el) {
  console.warn("Target #type tidak ditemukan di DOM.");
} else {

  const phrases = ["Zilzilan", "Front-end Developer", "Membuat UI Interaktif"];
  const typingSpeed = 80;   
  const deletingSpeed = 50; 
  const pauseAfterTyping = 1200; 
  const pauseAfterDeleting = 300; 
}
  let pi = 0, ci = 0;
  let deleting = false;

  function tick(){
    const full = phrases[pi];
    if (!deleting) {
      ci++;
      el.textContent = full.slice(0, ci);
      if (ci === full.length) {
      
        deleting = true;
        setTimeout(tick, pauseAfterTyping);
        return;
      }
      setTimeout(tick, typingSpeed);
    } else {
      ci--;
      el.textContent = full.slice(0, ci);
      if (ci === 0) {
        deleting = false;
        pi = (pi + 1) % phrases.length;
        setTimeout(tick, pauseAfterDeleting);
        return;
      }
      setTimeout(tick, deletingSpeed);
    }
  }

  
  tick();
