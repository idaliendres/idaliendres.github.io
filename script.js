document.addEventListener("DOMContentLoaded", function() {
  const toggleFooterButton = document.getElementById("toggle-footer");
  const footerText = document.getElementById("footer-text");

  toggleFooterButton.addEventListener("click", function() {
      if (footerText.classList.contains("hidden")) {
          footerText.classList.remove("hidden");
      } else {
          footerText.classList.add("hidden");
      }
  });
});
