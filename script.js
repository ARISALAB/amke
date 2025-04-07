document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('message').textContent = "Το μήνυμά σας εστάλη επιτυχώς!";
    this.reset();
  });
  