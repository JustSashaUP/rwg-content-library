window.addEventListener("scroll", () => {
    var state = "scrolled";
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
