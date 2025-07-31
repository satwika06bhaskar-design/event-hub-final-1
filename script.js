
// Registration form handler
document.getElementById('registrationForm')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const event = document.getElementById('event').value;
  const comments = document.getElementById('comments').value.trim();

  if (!name || !email || !event) {
    alert("Please fill all required fields.");
    return;
  }

  const registrationData = { name, email, event, comments };
  localStorage.setItem('latestRegistration', JSON.stringify(registrationData));
  window.location.href = "thankyou.html";
});

// Contact form handler
const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Thank you for contacting us! We'll get back to you soon.");
  contactForm.reset();
});

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

function setTheme(mode) {
  if (mode === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
  } else {
    body.classList.remove('dark-mode');
    themeToggle.textContent = '🌙';
  }
  localStorage.setItem('theme', mode);
}

themeToggle?.addEventListener('click', () => {
  const isDark = body.classList.contains('dark-mode');
  setTheme(isDark ? 'light' : 'dark');
});

const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);
