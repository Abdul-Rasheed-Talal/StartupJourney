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
  submitBtn.innerHTML = "Sending... 🔄";


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
    submitBtn.innerHTML = "Send Message";
  }
});
// ========================
// Back to Top Button
// ========================
const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
// ========================
// Scroll Reveal Animation
// ========================
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
// ========================
// Typing Animation Effect
// ========================
const typedText = document.querySelector(".typed-text");
const words = ["Developer", "Designer", "Creator", "Freelancer"];
let wordIndex = 0;
let charIndex = 0;
let typingDelay = 100;
let erasingDelay = 60;
let newWordDelay = 1200;

typedText.style.color = "green"; // Set the color of the typed text

function type() {
  if (charIndex < words[wordIndex].length) {
    typedText.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newWordDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    wordIndex++;
    if (wordIndex >= words.length) wordIndex = 0;
    setTimeout(type, typingDelay);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (words.length) setTimeout(type, newWordDelay + 250);
});

// ========================
// Preloader Logic
// ========================
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
// ========================
// Mobile Nav Toggle
// ========================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});





// ========================
// Future Features Placeholder
// ========================


// Add your JS functionality here as needed.
