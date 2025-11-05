// Highlight active nav link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href").includes(current)) {
      a.classList.add("active");
    }
  });
});

// ===== POPUP FUNCTIONALITY =====
const popup = document.getElementById("popup"); 
const popupImg = document.getElementById("popup-img"); 
const closePopup = document.querySelector(".close");

// For clicking the achievement images
document.querySelectorAll(".zoomable").forEach(img => {
  img.addEventListener("click", () => {
    popup.style.display = "block";
    popupImg.src = img.src;
  });
});

// For clicking the Certificate link
document.querySelectorAll(".certificate-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault(); 
    popup.style.display = "block"; 
    popupImg.src = btn.getAttribute("data-cert");
  }); 
});

// Close popup
closePopup.addEventListener("click", () => { 
  popup.style.display = "none"; 
});

popup.addEventListener("click", (e) => { 
  if (e.target === popup) popup.style.display = "none"; 
});

// ===== MOBILE NAV MENU =====
const menuToggle = document.querySelector(".menu-toggle");
const navLinksContainer = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinksContainer.classList.toggle("open");
  menuToggle.querySelector("i").classList.toggle("fa-xmark");
  menuToggle.querySelector("i").classList.toggle("fa-bars");
});
