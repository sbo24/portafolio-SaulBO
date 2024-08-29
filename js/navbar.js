document.addEventListener('DOMContentLoaded', function () {
    var navbarLinks = document.querySelectorAll('.nav-link');

    navbarLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));

            if (target) {
                e.preventDefault(); // Prevent default anchor click behavior
                var offcanvas = bootstrap.Offcanvas.getInstance(document.querySelector('#sidebarNav'));

                offcanvas.hide(); // Hide the offcanvas

                // Smooth scroll to the target after the offcanvas is hidden
                offcanvas._element.addEventListener('hidden.bs.offcanvas', function () {
                    target.scrollIntoView({ behavior: 'smooth' });
                }, { once: true });
            }
        });
    });
});