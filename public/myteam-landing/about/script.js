const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach((btn) => {
 
  btn.addEventListener('click', () => {
  
    // Boshqalar active bo‘lsa olib tashla
    toggleButtons.forEach((otherBtn) => {
      if (otherBtn !== btn) {
        otherBtn.classList.remove('active');
       
      } 
     
    })
    
    // Joriy tugmani almashtirish
    btn.classList.toggle('active')

  })
})