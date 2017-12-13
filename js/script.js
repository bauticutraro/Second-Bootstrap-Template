$(document).ready(function () {

    const nav = document.querySelector('#main-nav');

    nav.classList.add('nav-bg');
    window.addEventListener('scroll', () => {
      let y = window.pageYOffset;
      if (y > 50) {
        nav.classList.remove('nav-bg');
        nav.classList.add('nav-bg2');
      }
      else if (y === 0)
        nav.classList.remove('nav-bg2');
        nav.classList.add('nav-bg');
    });

  });
