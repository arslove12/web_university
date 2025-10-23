document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById("dark-mode-toggle");
  const html = document.documentElement;
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenuCloseButton = document.getElementById('mobile-menu-close-button');
  const mobileMenu = document.getElementById('mobile-menu');

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

  // Mobile menu toggle logic
  function openMenu() {
    mobileMenu.classList.add('open');
    mobileMenuButton.classList.add('hidden');
    mobileMenuCloseButton.classList.remove('hidden');
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    mobileMenuButton.classList.remove('hidden');
    mobileMenuCloseButton.classList.add('hidden');
  }

  mobileMenuButton.addEventListener('click', openMenu);
  mobileMenuCloseButton.addEventListener('click', closeMenu);
});
