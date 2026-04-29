import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggleDark");

  // ambil data dari localStorage
  const savedTheme = localStorage.getItem("theme");

  // set awal
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    if (toggle) toggle.textContent = "Light";
  } else {
    document.documentElement.classList.remove("dark");
    if (toggle) toggle.textContent = "Dark";
  }

  // klik tombol
  if (toggle) {
    toggle.addEventListener("click", () => {
      const isDark = document.documentElement.classList.toggle("dark");

      // simpan ke localStorage
      localStorage.setItem("theme", isDark ? "dark" : "light");

      // ubah teks tombol
      toggle.textContent = isDark ? "Light" : "Dark";
    });
  }
});