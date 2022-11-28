window.addEventListener('DOMContentLoaded', event => {

    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

deepai.setApiKey('cddf4d3b-7a53-4213-991b-15b9310a0354');

function paintImage() {
    
    var resp = deepai.callStandardApi("colorizer", {
        image: document.getElementById('img-for-work'),
    });
    fetch(resp)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('img-result').src = data.output_url;
    });
    
}

