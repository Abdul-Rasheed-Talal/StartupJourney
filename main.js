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

const scriptURL = 'https://script.google.com/macros/s/AKfycbw2ONzCJj_ZwOtW9UeAyE8S-Q-ykkh3N-gjW95WDzaOjDNHo7PkGRV7x06yFa7z3ls/exec';

document.querySelector('.contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const submitBtn = form.querySelector("button[type='submit']");
  const msg = document.getElementById('form-message');
  
  msg.textContent = "Sending...";
  msg.style.color = "black";
  submitBtn.disabled = true;

  try {
    // Convert FormData to URLSearchParams with proper casing
    const formData = new URLSearchParams();
    formData.append('Name', form.name.value);
    formData.append('Email', form.email.value);
    formData.append('Message', form.message.value);

    const response = await fetch(scriptURL, {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    // First get the response as text
    const responseText = await response.text();
    
    // Try to parse as JSON, fallback to text if it fails
    let data;
    try {
      data = JSON.parse(responseText);
    } catch {
      throw new Error(`Server returned: ${responseText}`);
    }

    if (data.result === 'success') {
      msg.textContent = "Message sent successfully!";
      msg.style.color = "green";
      form.reset();
    } else {
      throw new Error(data.error || 'Unknown server error');
    }
  } catch (error) {
    console.error('Submission error:', error);
    msg.textContent = `Error: ${error.message}`;
    msg.style.color = "red";
  } finally {
    submitBtn.disabled = false;
  }
});




// ========================
// Future Features Placeholder
// ========================

// Example: Smooth scroll, toggle dark mode, etc.
// Add your JS functionality here as needed.
