document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Implement login logic here
  
    // Simulate a successful login
    alert('Login Berhasil');
    
    // Redirect to homepage.html
    window.location = 'homepage.html';
  });
  
  document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Implement register logic here
    
    // Simulate a successful registration
    alert('Selamat Register Berhasil!.');
  
    // Call showLogin() to switch view to the login form
    showLogin();
  });
  
  function showRegister() {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('register-section').style.display = 'block';
  }
  
  function showLogin() {
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('register-section').style.display = 'none';
  }
  