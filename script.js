// Contact form
let contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        document.getElementById("msg").textContent = "Message sent!";
    });
}

let slides = document.querySelectorAll(".slide1");
let current = 0;

// Show slide function
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

// Next
function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
}

// Previous
function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
}

// Auto slide
setInterval(nextSlide, 4000);

// Button controls
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

if (nextBtn) nextBtn.addEventListener("click", nextSlide);
if (prevBtn) prevBtn.addEventListener("click", prevSlide);


// Open modal
function openLogin() {
    document.getElementById("loginModal").style.display = "block";
}

// Close modal
function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
}

// Login validation
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let msg = document.getElementById("loginMsg");

    if (user === "admin" && pass === "1234") {
        msg.style.color = "green";
        msg.textContent = "Login Successful";
    } else {
        msg.style.color = "red";
        msg.textContent = "Invalid Credentials";
    }
}

// Close when clicking outside
window.onclick = function(event) {
    let modal = document.getElementById("loginModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
