// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

const menuMobileBurgerButton = document.getElementById(
  "menuMobileBurgerButton"
);
const menuMobileContainer = document.getElementById("mobileMenuContainer");

menuMobileBurgerButton.addEventListener("click", () => {
  const menuOpenState = parseInt(
    menuMobileContainer.getAttribute("open-state")
  );

  if (!menuOpenState) {
    menuMobileContainer.setAttribute("open-state", "1");
    menuMobileContainer.classList.remove("menuClose");
    menuMobileContainer.classList.add("menuOpen");
  } else {
    menuMobileContainer.setAttribute("open-state", "0");
    menuMobileContainer.classList.remove("menuOpen");
    menuMobileContainer.classList.add("menuClose");
  }
});
