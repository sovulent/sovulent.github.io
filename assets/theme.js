document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("theme-toggle");
  const saved = localStorage.getItem("theme");
  if (saved === "dark") document.body.classList.add("dark");

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const active = document.body.classList.contains("dark");
    localStorage.setItem("theme", active ? "dark" : "light");
  });
});
