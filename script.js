document.addEventListener("DOMContentLoaded", () => {

    // Current year
    document.getElementById("year").textContent =
        new Date().getFullYear();


    // Mobile navigation
    const menuButton = document.getElementById("menuButton");
    const nav = document.getElementById("nav");

    menuButton.addEventListener("click", () => {
        nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
        });
    });


    // Scroll reveal animations
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);

                }

            });
        },
        {
            threshold: 0.12
        }
    );

    elements.forEach(element => {
        observer.observe(element);
    });


    // Desktop card movement
    const card = document.querySelector(".developer-card");

    if (
        card &&
        window.matchMedia("(pointer: fine)").matches
    ) {

        document.addEventListener("mousemove", event => {

            const x =
                (event.clientX / window.innerWidth - 0.5) * 2;

            const y =
                (event.clientY / window.innerHeight - 0.5) * 2;

            card.style.transform =
                `perspective(900px)
                 rotateY(${x * 2}deg)
                 rotateX(${y * -2}deg)`;

        });

    }

});
