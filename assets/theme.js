function toggleTheme() {
  const body = document.body;
  const dark = body.classList.toggle("dark");
  localStorage.setItem("theme", dark ? "dark" : "light");
}

window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") document.body.classList.add("dark");

  const toggleBtn = document.getElementById("theme-toggle");
  if (toggleBtn) toggleBtn.onclick = toggleTheme;
});
