document.addEventListener('DOMContentLoaded', function() {
 

  new Splide('.splide', {
    type:'loop',
    perPage: 2,
    autoplay: true,
    pauseOnHover: true,
    arrows: true,
    pagination: true,
    speed: 500,
  }).mount();
});