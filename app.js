// $(function () {
//     $(document).scroll(function () {
//         var $nav = $("#mainNavbar");
//         $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
//     });
// });

// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     autoWidth: true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })

const navSlide = () => {
  const burger = document.getElementById("burger");
  // const nav = document.getElementById("navLinks");
  const nav = document.getElementById("navLinksMin");
  // const navLinks = document.querySelectorAll("#navLinks li");
  const navLinks = document.querySelectorAll("#navLinksMin li");


  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    burger.classList.toggle("toggled");
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(max-width: 700px)").matches) {
      if (
        nav.classList.contains("nav-active") 
        &&
        burger.classList.contains("toggled")
      ) {
          
        navLinks.forEach((link) => {
              link.style.animation = "";
            })

        nav.classList.remove("nav-active");
        burger.classList.remove("toggled");
      }
    }
  });

};

navSlide();
