document.querySelector(".contact-form")?.addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you! Our team will contact you shortly.");
});

document.addEventListener("DOMContentLoaded", () => {

  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  const servicesToggle = document.getElementById("servicesToggle");
  const navItem = servicesToggle.parentElement;

  // Hamburger toggle
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
    menuToggle.classList.toggle("active"); // 🔥 animation
    document.body.classList.toggle("nav-open");
  });

  // Services dropdown (mobile only)
  servicesToggle.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      navItem.classList.toggle("open");
    }
  });

});

// Trust Strip

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".reveal-item");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    { threshold: 0.2 }
  );

  items.forEach(item => observer.observe(item));
});

// Faq section

  document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".rc-faq-item");

    faqItems.forEach((item) => {
      const btn = item.querySelector(".rc-faq-question");
      const answer = item.querySelector(".rc-faq-answer");

      btn.addEventListener("click", () => {
        const isOpen = item.classList.contains("active");

        // Close all
        faqItems.forEach((i) => {
          i.classList.remove("active");
          i.querySelector(".rc-faq-answer").style.height = 0;
        });

        // Open clicked
        if (!isOpen) {
          item.classList.add("active");
          answer.style.height = answer.scrollHeight + "px";
        }
      });
    });
  });

