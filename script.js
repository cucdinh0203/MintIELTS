document.addEventListener("DOMContentLoaded", () => {
    // Smoothly scrolls to the courses section when the "Start Learning" button is clicked.
    const startBtn = document.getElementById("startBtn");
    const coursesSection = document.getElementById("courses");
    if (startBtn && coursesSection) {
        startBtn.addEventListener("click", () => {
            coursesSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    // Highlights the active navigation link based on the user's scroll position.
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = "#" + section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === current) {
                link.classList.add("active");
            }
        });
    });

    // Fades in course cards as the user scrolls down the page.
    const courseCards = document.querySelectorAll(".course-card");
    const fadeInOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        courseCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerBottom) {
                card.style.opacity = 1;
                card.style.transform = "translateY(0)";
            }
        });
    };

    // Run the function on page load and on every scroll.
    fadeInOnScroll();
    window.addEventListener("scroll", fadeInOnScroll);
});