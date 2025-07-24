// main.js

// ========================
// Initialize AOS (Animate on Scroll)
// ========================
AOS.init({
  duration: 1000,      // Animation duration in ms
  once: true,          // Only animate once while scrolling down
  mirror: false        // Disable animation on scroll-up
});

// ========================
// Dark Mode Toggle
// ========================
// ========================
// Dark Mode Toggle with Icon Switch
// ========================
const toggleBtn = document.getElementById("darkToggle");
const themeIcon = document.getElementById("themeIcon");

// Switch theme
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");
  themeIcon.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("prefers-dark", isDark);
});

// Load saved preference
window.addEventListener("DOMContentLoaded", () => {
  const prefersDark = localStorage.getItem("prefers-dark") === "true";
  if (prefersDark) {
    document.body.classList.add("dark-mode");
    themeIcon.textContent = "☀️";
  }
});
// ========================
// Contact Form Submission
// ========================
// This example uses a Google Apps Script to handle form submissions.

const scriptURL = 'https://script.google.com/macros/s/AKfycbxwlrYVaoQ3aBDRxlgXulfjBrrD4H1Et_w7JpTyPDhQ6kgVay4HKj6E3xRlP6F0mvMe/exec';

document.querySelector('.contact-form').addEventListener('submit', e => {
  e.preventDefault();

  const form = e.target;
  const submitBtn = form.querySelector("button[type='submit']");
  const msg = document.getElementById('form-message'); // Make sure to add this in HTML

  msg.textContent = "Sending...";
  msg.style.color = "black";
  submitBtn.disabled = true;

  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  })
  .then(response => {
    msg.textContent = "Message sent successfully!";
    msg.style.color = "green";
    form.reset();
    submitBtn.disabled = false;
  })
  .catch(error => {
    msg.textContent = "Error sending message. Please try again.";
    msg.style.color = "red";
    console.error('Error!', error.message);
    submitBtn.disabled = false;
  });
});




// ========================
// Future Features Placeholder
// ========================

// Example: Smooth scroll, toggle dark mode, etc.
// Add your JS functionality here as needed.
