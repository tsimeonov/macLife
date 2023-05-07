const searchInput = document.querySelector("form input");
const searchButton = document.querySelector("form i");

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value;
  console.log(searchTerm);
});

// Navigation
const nav = document.querySelector(".responsive-navigation-slider");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

// FAQ Section
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
