// Get the mobile menu icon and navbar menu
const mobileMenuIcon = document.getElementById('mobile-menu-icon');
const navbarMenu = document.querySelector('.navbar-menu');

// Add event listener to toggle the navbar visibility on mobile
mobileMenuIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});



document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;

    // Close other open items
    document.querySelectorAll(".faq-item").forEach((item) => {
      if (item !== faqItem) {
        item.classList.remove("active");
      }
    });

    // Toggle the current item
    faqItem.classList.toggle("active");
  });
});
