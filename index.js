(() => {
  document
    .querySelectorAll(".adva")
    .forEach((btn) => btn.addEventListener("mousedown", handleMouseMove));

  function handleMouseMove({ offsetX, offsetY, target }) {
    if (!target.matches(".adva")) return;

    target.style.setProperty("--adva-x", offsetX + "px");
    target.style.setProperty("--adva-y", offsetY + "px");
    target.style.setProperty("--adva-animation-name", "adva");

    target.addEventListener(
      "animationend",
      () => {
        target.style.setProperty("--adva-animation-name", "");
      },
      { once: true }
    );
  }
})();
