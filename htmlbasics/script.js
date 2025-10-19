const form = document.getElementById('registrationForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  
  // Optional: Extra validation logic can be added here

  successMessage.textContent = "✅ Registration successful! Thank you for joining.";
  form.reset();
});
