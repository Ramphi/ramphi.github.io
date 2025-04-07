

const toggleButton = document.getElementById("darkModeToggle");
const savedTheme = localStorage.getItem("theme");
const savedThemeIcon = localStorage.getItem("themeIcon");

if (savedTheme === "null") {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = prefersDark ? "dark" : "light";
  const themeIcon = prefersDark ? "☀️" : "🌙"; // Set default icon based on preference

  // Apply the detected theme
  setTheme(theme, themeIcon); 
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

