(() => {
  document.addEventListener("mousedown", handleMouseMove);

  function handleMouseMove({ offsetX, offsetY, target }) {
    if (!target.matches(".adva")) return;

    target.style.setProperty("--adva-x", offsetX + "px");
    target.style.setProperty("--adva-y", offsetY + "px");
    target.style.setProperty("--animation-name-adva", "adva");

    target.addEventListener(
      "animationend",
      () => {
        target.style.setProperty("--animation-name-adva", "");
      },
      { once: true }
    );
  }
})();
