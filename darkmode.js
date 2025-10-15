document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById("dark-mode-toggle");
  const html = document.documentElement;
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");

  function updateIcons() {
    if (html.classList.contains("dark")) {
      sunIcon.classList.add("hidden");
      moonIcon.classList.remove("hidden");
    } else {
      sunIcon.classList.remove("hidden");
      moonIcon.classList.add("hidden");
    }
  }

  // Set initial theme
  if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
  updateIcons();

  // Theme toggle button event listener
  toggleBtn.addEventListener("click", () => {
    html.classList.toggle("dark");
    localStorage.theme = html.classList.contains("dark") ? "dark" : "light";
    updateIcons();
  });
});
