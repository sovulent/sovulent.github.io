document.addEventListener("DOMContentLoaded", function () {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") document.body.classList.add("dark");

  const toggle = document.getElementById("darkModeSwitch");
  if (toggle) {
    toggle.checked = document.body.classList.contains("dark");
    toggle.addEventListener("change", function () {
      document.body.classList.toggle("dark");
      localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
    });
  }
});

function toggleSettings() {
  const panel = document.getElementById("settings-panel");
  panel.style.display = panel.style.display === "block" ? "none" : "block";
}
