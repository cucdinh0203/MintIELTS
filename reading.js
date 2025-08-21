document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".intro p, .blue-box, .callout, table");

    const handleAnimations = () => {
        const triggerBottom = window.innerHeight * 0.85;

        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                // Element is in view, add the animated class
                element.classList.add("animate");
            } else {
                // Element is out of view, remove the animated class to reset
                element.classList.remove("animate");
            }
        });
    };

    // Run the function on page load and on every scroll.
    handleAnimations();
    window.addEventListener("scroll", handleAnimations);
});