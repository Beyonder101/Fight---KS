document.addEventListener('DOMContentLoaded', function () {
    function showTime() {
        document.getElementById('currentTime').innerHTML = new Date().toUTCString();
    }
    showTime();
    setInterval(function () {
        showTime();
    }, 1000);

    let lastScrollTop = 0;
    const imageBanner = document.getElementById('image-banner');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            imageBanner.style.display = 'none';
        } else {
            // Scrolling up
            imageBanner.style.display = 'block';
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
