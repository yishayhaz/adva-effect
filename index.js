document
  .querySelectorAll(".adva")
  .forEach((btn) => btn.addEventListener("mousedown", handleMouseMove));

function handleMouseMove(e) {
  const { offsetX, offsetY, target } = e;

  if (0 <= offsetX <= target.offsetWidth) {
    target.style.setProperty("--x", offsetX + "px");
  }
  if (0 <= offsetY <= target.offsetHeight) {
    target.style.setProperty("--y", offsetY + "px");
  }

  target.style.setProperty("--animation", "adva 500ms ease");

  target.addEventListener(
    "animationend",
    () => {
      target.style.setProperty("--animation", "");
    },
    { once: true }
  );
}
