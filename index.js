function init() {
  const tabContainer = document.querySelector(
    ".main__container__shop__container__tabs"
  );
  tabContainer.addEventListener("click", function (event) {
    const target = event.target;
    if (target.tagName === "LI") {
      const active = target.classList.contains("active");
      if (active) {
        return;
      }
      const liElements = tabContainer.querySelectorAll("ul li");
      for (const element of liElements) {
        element.classList.remove("active");
      }
      target.classList.add("active");
    }
  });
}
window.addEventListener("load", init);
