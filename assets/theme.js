const toggleTheme = () => {
    const isDark = document.body.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };
  
  window.onload = () => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") document.body.classList.add("dark");
  };
  