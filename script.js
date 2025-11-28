document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const errorContainer = document.getElementById('error-container');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent actual submission

      // Simulate an error
      const errorMessage = "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer plus tard.";
      
      errorContainer.textContent = errorMessage;
      errorContainer.style.display = 'block';
      
      // Move focus to the error container so screen readers announce it immediately
      errorContainer.focus();
    });
  }
});
