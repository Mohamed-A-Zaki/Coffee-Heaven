/********************* Start navbar section ***************************/
let navbar_icon = document.querySelector(".nav-bar .bar-icon");
let navbar_links = document.querySelector(".nav-bar .nav-links");

navbar_icon.addEventListener("click", () => {
  navbar_links.classList.toggle("open");
  navbar_icon.children[0].classList.toggle("fa-bars");
  navbar_icon.children[0].classList.toggle("fa-xmark");
});

window.addEventListener("scroll", close_nav_links);
window.addEventListener("resize", close_nav_links);

function close_nav_links() {
  navbar_links.classList.remove("open");
  navbar_icon.children[0].classList.add("fa-bars");
  navbar_icon.children[0].classList.remove("fa-xmark");
}
/********************* End navbar section ******************************/

/********************* Start landing section ***************************/
let navbar_section = document.querySelector(".nav-bar");
let landing_section = document.querySelector(".landing .container");

landing_section.style.height = `calc(100vh - ${navbar_section.clientHeight}px)`;
/********************* End landing section *****************************/

/********************* Start Scroll to top ***************************/
let scroll_to_top = document.querySelector(".scroll-to-top ");

window.addEventListener("scroll", () => {
  scrollY >= 1000
    ? scroll_to_top.classList.add("show")
    : scroll_to_top.classList.remove("show");
});

scroll_to_top.addEventListener("click", () => scrollTo({ top: 0 }));
/********************* End Scroll to top ***************************/
