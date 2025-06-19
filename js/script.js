window.addEventListener('scroll', function () {
    const searchToggle = document.querySelector('.nav-search-toggle');
    if (!searchToggle) return;

    if (window.scrollY > 50) {
        searchToggle.classList.add('show');
    } else {
        searchToggle.classList.remove('show');
    }
});