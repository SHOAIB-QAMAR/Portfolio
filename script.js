document.addEventListener('DOMContentLoaded', function () {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const menuIcon = document.getElementById('menuIcon');
    const navLinks = document.getElementById('navLinks');

    function toggleMenu() {
        navLinks.classList.toggle('active');
        hamburgerBtn.classList.toggle('active');

        const isExpanded = navLinks.classList.contains('active');
        hamburgerBtn.setAttribute('aria-expanded', isExpanded);
        document.body.classList.toggle('menu-open', isExpanded);

        if (isExpanded) {
            menuIcon.classList.replace('fa-bars', 'fa-times');
        } else {
            menuIcon.classList.replace('fa-times', 'fa-bars');
        }
    }

    hamburgerBtn.addEventListener('click', toggleMenu);

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function () {
            navLinks.classList.remove('active');
            hamburgerBtn.classList.remove('active');
            menuIcon.classList.replace('fa-times', 'fa-bars');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('menu-open'); // ✅ FIX SCROLLING
        });
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            hamburgerBtn.classList.remove('active');
            menuIcon.classList.replace('fa-times', 'fa-bars');
            document.body.classList.remove('menu-open');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
        }
    });
});

