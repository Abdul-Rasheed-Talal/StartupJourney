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
// Future Features Placeholder
// ========================

// Example: Smooth scroll, toggle dark mode, etc.
// Add your JS functionality here as needed.
