document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector(".close-btn i");
    const sidebarItems = document.querySelectorAll(".sidebar ul li");

    let isSidebarOpen = false;

    hamburger.addEventListener("click", () => {
        if (!isSidebarOpen) {
            gsap.to(sidebar, {
                left: 0,
                duration: 0.5,
                ease: "power2.out"
            });

            gsap.fromTo(sidebarItems,
                {
                    opacity: 0,
                    x: -30
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                    stagger: 0.2,
                    ease: "power2.out"
                }
            );
        } else {
            gsap.to(sidebar, {
                left: "-280px",
                duration: 0.5,
                ease: "power2.in"
            });
        }
        isSidebarOpen = !isSidebarOpen;
    });

    closeBtn.addEventListener("click", () => {
        gsap.to(sidebar, {
            left: "-280px",
            duration: 0.5,
            ease: "power2.in"
        });
        isSidebarOpen = false;
    });

    document.addEventListener("click", (event) => {
        if (isSidebarOpen && !sidebar.contains(event.target) && !hamburger.contains(event.target)) {
            gsap.to(sidebar, {
                left: "-280px",
                duration: 0.5,
                ease: "power2.in"
            });
            isSidebarOpen = false;
        }
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            gsap.to(".navbar", {
                background: "linear-gradient(180deg, #ff512f, #dd2476)",
                duration: 0.3
            });
        } else {
            gsap.to(".navbar", {
                background: "linear-gradient(90deg, #ff512f, #dd2476)",
                duration: 0.3
            });
        }
    });

    ScrollReveal().reveal(".navbar", {
        duration: 800,
        origin: "top",
        distance: "50px",
        easing: "ease-in-out"
    });

    ScrollReveal().reveal(".sidebar ul li", {
        duration: 1000,
        interval: 200,
        origin: "left",
        distance: "50px",
        easing: "ease-in-out"
    });
});

gsap.from(".agsap", {
    y: 100,
    opacity: 0,
    duration: 2,
    delay: 0.5
});

gsap.from(".agsape", {
    x: 100,
    opacity: 0,
    duration: 2,
    delay: 0.5
});

document.addEventListener("DOMContentLoaded", () => {
    VanillaTilt.init(document.querySelectorAll(".nav-links a, .logo  , .hamburger"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2
    });
});

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    let scrollValue = window.scrollY;

    let newAngle = 268 + (scrollValue / 2);

    navbar.style.background = `linear-gradient(${newAngle}deg, #ff512f, #dd2476)`;
});