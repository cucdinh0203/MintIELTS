document.addEventListener("DOMContentLoaded", () => {
    // 1. Smoothly scrolls to the courses section when the "Start Learning" button is clicked.
    const startBtn = document.getElementById("startBtn");
    const coursesSection = document.getElementById("courses");
    if (startBtn && coursesSection) {
        startBtn.addEventListener("click", () => {
            coursesSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    // 2. Highlights the active navigation link based on the user's scroll position.
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

    // 3. Fades in and out course cards as the user scrolls.
    const courseCards = document.querySelectorAll(".course-card");
    const handleAnimations = () => {
        const triggerBottom = window.innerHeight * 0.85;

        courseCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                // Element is in view, add the animated class
                card.classList.add("animate");
            } else {
                // Element is out of view, remove the animated class to reset
                card.classList.remove("animate");
            }
        });
    };

    // Run the function on page load and on every scroll.
    handleAnimations();
    window.addEventListener("scroll", handleAnimations);

    // 4. Toggles the avatar dropdown menu when the avatar is clicked.
    const avatarDropdown = document.querySelector(".avatar-dropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    if (avatarDropdown && dropdownMenu) {
        avatarDropdown.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevents the click from propagating to the document
            dropdownMenu.classList.toggle("show");
        });

        // Close the dropdown if the user clicks anywhere else on the page
        document.addEventListener("click", (event) => {
            if (!avatarDropdown.contains(event.target)) {
                dropdownMenu.classList.remove("show");
            }
        });
    }
});