function scrollToSection(sectionId) {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - navbarHeight;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Reset error messages
    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('message-error').textContent = '';
  
    // Get form values
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
  
    // Validate form fields
    if (name === '') {
      document.getElementById('name-error').textContent = 'Please enter your name';
      return;
    }
  
    if (email === '') {
      document.getElementById('email-error').textContent = 'Please enter your email';
      return;
    }
  
    if (!isValidEmail(email)) {
      document.getElementById('email-error').textContent = 'Please enter a valid email';
      return;
    }
  
    if (message === '') {
      document.getElementById('message-error').textContent = 'Please enter a message';
      return;
    }
  
    // Form is valid, do something with the data (e.g., submit to server)
    console.log('Form submitted!');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  
    // Reset the form
    document.getElementById('contact-form').reset();
  });
  
  function isValidEmail(email) {
    // Basic email validation regex
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }
  