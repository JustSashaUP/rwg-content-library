window.addEventListener("scroll", () => {
  const state = "scrolled";
  if (window.scrollY > 50) {
    document.getElementById("navbar").classList.add(state);
    document.getElementById("nav_links").classList.add(state);
    document.getElementById("grid_content").classList.add(state);
  } else {
    document.getElementById("navbar").classList.remove(state);
    document.getElementById("nav_links").classList.remove(state);
    document.getElementById("grid_content").classList.remove(state);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const state = "active";

  const updateActiveLink = () => {
    const currentHash = window.location.hash || "#home";
    const navLinks = document.getElementById("nav_links").querySelectorAll("a");
    for (const link of navLinks) {
      if (link.getAttribute("href") === currentHash) {
        link.classList.add(state);
      } else {
        link.classList.remove(state);
      }
    }
  };

  updateActiveLink();

  window.addEventListener("hashchange", updateActiveLink);
});
