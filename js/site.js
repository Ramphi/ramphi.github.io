

const toggleButton = document.getElementById("darkModeToggle");
 savedTheme = localStorage.getItem("theme");
 savedThemeIcon = localStorage.getItem("themeIcon");

if (!savedTheme) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  savedTheme = prefersDark ? "dark" : "light";
  savedThemeIcon = prefersDark ? "☀️" : "🌙"; // Set default icon based on preference

} 

setTheme(savedTheme, savedThemeIcon); // Apply saved theme


toggleButton.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "dark") {
    setTheme("light", "🌙"); // Light mode icon
  } else {
    setTheme("dark", "☀️"); // Dark mode icon
  }
});

function setTheme(theme, caption) {
  document.documentElement.setAttribute("data-theme", theme);
  toggleButton.innerText = caption; // Update button text
  localStorage.setItem("theme", theme);
  localStorage.setItem("themeIcon", caption); // Store the icon as well
}

const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

