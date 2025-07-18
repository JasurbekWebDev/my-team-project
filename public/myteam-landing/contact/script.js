const contactForm = document.getElementById('contactForm');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMessage = document.getElementById('successMessage');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameGroup = nameInput.parentElement;
const emailGroup = emailInput.parentElement;
const messageGroup = messageInput.parentElement;

function validateInput(input, errorElement, group) {
  const isEmpty = !input.value.trim();
  errorElement.textContent = isEmpty ? 'This field is required' : '';
  group.classList.toggle('error', isEmpty);
  input.classList.toggle('error', isEmpty);

  // Fonga shaffoflikni majburiy qo'llash
  input.style.backgroundColor = isEmpty ? 'transparent' : 'transparent';
}

// Har bir inputda o'zgarishni tekshirish
nameInput.addEventListener('input', () => validateInput(nameInput, nameError, nameGroup));
emailInput.addEventListener('input', () => validateInput(emailInput, emailError, emailGroup));
messageInput.addEventListener('input', () => validateInput(messageInput, messageError, messageGroup));

// Sahifa yuklanganda stilni qayta o'rnatish
window.addEventListener('load', () => {
  [nameInput, emailInput, messageInput].forEach(input => {
    if (input.value) {
      input.style.backgroundColor = 'transparent';
      input.parentElement.classList.remove('error');
    }
  });
});

// Inputga fokus bo'lganda fonni tekshirish
[nameInput, emailInput, messageInput].forEach(input => {
  input.addEventListener('focus', () => {
    input.style.backgroundColor = 'transparent';
  });
});

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Oxirgi validatsiya
  validateInput(nameInput, nameError, nameGroup);
  validateInput(emailInput, emailError, emailGroup);
  validateInput(messageInput, messageError, messageGroup);

  // Agar xatolik bo'lmasa
  if (!nameError.textContent && !emailError.textContent && !messageError.textContent) {
    successMessage.style.display = 'block';
    setTimeout(() => {
      successMessage.style.display = 'none';
      contactForm.reset();
      nameGroup.classList.remove('error');
      emailGroup.classList.remove('error');
      messageGroup.classList.remove('error');
      nameInput.classList.remove('error');
      emailInput.classList.remove('error');
      messageInput.classList.remove('error');
    }, 2000);
  }
});