// Function to smoothly scroll to a section when a navigation link is clicked
function smoothScrollToSection(targetId) {
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }
}

// Add click event listeners to navigation links for smooth scrolling
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            smoothScrollToSection(targetId);
        });
    });

    // Function to set the active link in the navigation based on scroll position
    function setActiveLink() {
        const scrollY = window.scrollY;
        const sections = document.querySelectorAll("section");

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.clientHeight;
            const target = section.getAttribute("id");

            if (scrollY >= sectionTop && scrollY <= sectionBottom) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                });

                // Find the corresponding navbar link by data-target
                const correspondingLink = document.querySelector(
                    `.navbar a[data-target="${target}"]`
                );

                if (correspondingLink) {
                    correspondingLink.classList.add("active");
                }
            }
        });
    }

    // Add scroll event listener to update active link on scroll
    window.addEventListener("scroll", setActiveLink);
});

// Function to toggle the navigation menu on small screens
function toggleNavMenu() {
    var navbar = document.getElementById("navbar");
    if (navbar.style.display === "flex") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "flex";
    }
}
