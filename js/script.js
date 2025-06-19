function shouldToggleSearch() {
    const desktopSearch = document.querySelector('.d-lg-flex .nav-search-toggle');
    const mobileSearch = document.querySelector('.d-lg-none.nav-search-toggle');

    const isScrollable = document.documentElement.scrollHeight > document.documentElement.clientHeight;
    const scrolledDown = window.scrollY > 50;

    // Desktop search form
    if (window.innerWidth >= 992) {
        if (desktopSearch) {
            if (isScrollable && scrolledDown) {
                desktopSearch.classList.add('show');
            } else {
                desktopSearch.classList.remove('show');
            }
        }
        if (mobileSearch) mobileSearch.classList.remove('show');
    }

    // Mobile search form
    if (window.innerWidth < 992) {
        if (mobileSearch) {
            if (isScrollable && scrolledDown) {
                mobileSearch.classList.add('show');
            } else {
                mobileSearch.classList.remove('show');
            }
        }
        if (desktopSearch) desktopSearch.classList.remove('show');
    }
}

window.addEventListener('scroll', shouldToggleSearch);
window.addEventListener('resize', shouldToggleSearch);
window.addEventListener('load', shouldToggleSearch);
