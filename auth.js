const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;
    localStorage.setItem(email, JSON.stringify({ password }));
    alert("Registered successfully!");
    window.location.href = "index.html";
  });
}

const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const user = JSON.parse(localStorage.getItem(email));
    if (user && user.password === password) {
      localStorage.setItem("loggedInUser", email);
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid credentials");
    }
  });
}
